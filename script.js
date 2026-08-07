// VibeCoders community site — vanilla JS, no build step.

// Set the real Discord invite URL here when available.
const DISCORD_INVITE = "https://github.com/VibeCoders-Community";
const GITHUB_ORG = "VibeCoders-Community";

document.getElementById("year").textContent = new Date().getFullYear();

// Discord invite link
const invite = document.getElementById("discordInvite");
if (invite) invite.href = DISCORD_INVITE;

// Mobile nav
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
});
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});

// Animated counters
const counters = document.querySelectorAll("[data-count]");
const animate = (el) => {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.count === "24" ? "" : "+";
  const dur = 900;
  const t0 = performance.now();
  const tick = (t) => {
    const p = Math.min((t - t0) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + (p === 1 ? suffix : "");
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      animate(e.target);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.6 });
counters.forEach((c) => io.observe(c));

// Load public org repos into the projects grid
async function loadRepos() {
  const grid = document.getElementById("repoCards");
  try {
    const res = await fetch(
      `https://api.github.com/orgs/${GITHUB_ORG}/repos?per_page=6&sort=updated`
    );
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const repos = (await res.json()).filter((r) => !r.fork && r.name !== ".github");
    if (!repos.length) throw new Error("no repos");

    grid.innerHTML = repos
      .map(
        (r) => `
      <article class="card">
        <a class="card__link" href="${r.html_url}" target="_blank" rel="noopener">
          <h3>${r.name}</h3>
          <p>${r.description || "Community project."}</p>
          <div class="card__meta">
            ${r.language ? `<span>● ${r.language}</span>` : ""}
            <span>★ ${r.stargazers_count}</span>
          </div>
        </a>
      </article>`
      )
      .join("");
  } catch {
    grid.innerHTML = `
      <article class="card">
        <a class="card__link" href="https://github.com/${GITHUB_ORG}" target="_blank" rel="noopener">
          <h3>Our projects on GitHub</h3>
          <p>Browse the ${GITHUB_ORG} organization repositories.</p>
        </a>
      </article>`;
  }
}
loadRepos();
