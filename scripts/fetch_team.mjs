// Fetches Discord guild members with the TeamCommunity role and writes
// src/data/team.json + downloads avatars to public/team/.
// Runs automatically before `astro build` (npm prebuild hook).
// Without DISCORD_BOT_TOKEN it keeps the committed team.json as-is.

import { writeFile, mkdir } from "node:fs/promises";

const TOKEN = process.env.DISCORD_BOT_TOKEN;
const GUILD_ID = process.env.DISCORD_GUILD_ID || "1509571814983073912";
const TEAM_ROLE_ID = process.env.TEAM_ROLE_ID || "1517639838805917787"; // TeamCommunity

const DATA_FILE = new URL("../src/data/team.json", import.meta.url);
const STATS_FILE = new URL("../src/data/stats.json", import.meta.url);
const AVATAR_DIR = new URL("../public/team/", import.meta.url);

if (!TOKEN) {
  console.warn("[fetch_team] DISCORD_BOT_TOKEN not set — keeping committed team.json");
  process.exit(0);
}

const api = async (path, params = {}) => {
  const url = new URL(`https://discord.com/api/v10${path}`);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const res = await fetch(url, { headers: { Authorization: `Bot ${TOKEN}` } });
  if (!res.ok) throw new Error(`Discord API ${res.status} for ${path}`);
  return res.json();
};

// Default avatar index for users without a custom avatar.
const defaultAvatarIndex = (id) => Number(BigInt(id) >> 22n) % 6;

async function main() {
  let members = [];
  let after = "0";
  for (;;) {
    const batch = await api(`/guilds/${GUILD_ID}/members`, { limit: 1000, after });
    if (!batch.length) break;
    members = members.concat(batch);
    after = batch[batch.length - 1].user.id;
    if (batch.length < 1000) break;
  }

  const team = members
    .filter((m) => m.roles.includes(TEAM_ROLE_ID) && !m.user.bot)
    .map((m) => {
      const u = m.user;
      const avatarUrl = u.avatar
        ? `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.png?size=256`
        : `https://cdn.discordapp.com/embed/avatars/${defaultAvatarIndex(u.id)}.png`;
      return {
        id: u.id,
        username: u.username,
        display: u.global_name || u.username,
        avatarUrl,
        avatar: `/team/${u.id}.png`,
      };
    })
    .sort((a, b) => a.display.localeCompare(b.display));

  await mkdir(AVATAR_DIR, { recursive: true });
  for (const member of team) {
    const res = await fetch(member.avatarUrl);
    if (!res.ok) {
      console.warn(`[fetch_team] avatar download failed for ${member.username}: ${res.status}`);
      member.avatar = null;
      continue;
    }
    await writeFile(new URL(`${member.id}.png`, AVATAR_DIR), Buffer.from(await res.arrayBuffer()));
  }

  const out = team.map(({ avatarUrl, ...m }) => m);
  await writeFile(DATA_FILE, JSON.stringify(out, null, 2) + "\n");
  console.log(`[fetch_team] wrote ${out.length} team members`);

  // Real server stats for the hero counters.
  try {
    const guild = await api(`/guilds/${GUILD_ID}`, { with_counts: "true" });
    const members = guild.approximate_member_count ?? out.length;
    const online = guild.approximate_presence_count ?? null;
    await writeFile(STATS_FILE, JSON.stringify({ members, online }, null, 2) + "\n");
    console.log(`[fetch_team] stats: ${members} members, ${online} online`);
  } catch (err) {
    console.warn(`[fetch_team] stats fetch failed, keeping committed stats.json: ${err.message}`);
  }
}

main().catch((err) => {
  console.warn(`[fetch_team] failed, keeping committed team.json: ${err.message}`);
  process.exit(0); // never break the build
});
