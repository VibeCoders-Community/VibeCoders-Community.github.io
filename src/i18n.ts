export type Lang = "en" | "ru";

export const ui = {
  en: {
    meta: {
      title: "VibeCoders — AI vibe coding community",
      description:
        "VibeCoders is a friendly AI vibe coding community on Discord. Build with AI agents, share projects, and ship together.",
      ogImageAlt: "VibeCoders — AI vibe coding community",
    },
    nav: {
      about: "About",
      features: "Features",
      projects: "Projects",
      faq: "FAQ",
      team: "Team",
      join: "Join",
    },
    a11y: {
      backToTop: "Back to top",
    },
    hero: {
      badge: "> AI VIBE CODING DISCORD COMMUNITY",
      titleStart: "VIBE",
      titleAccent: "CODERS",
      subtitle:
        "A friendly place where developers code with AI agents, learn and ship together. Ask questions, share projects, find teammates.",
      chip: "neon-terminal edition",
      ctaJoin: "Join the community",
      ctaProjects: "See our projects",
      terminal: {
        title: "vibe — zsh",
        lines: [
          { t: "cmd", x: "pixie greet --all" },
          { t: "ok", x: "✓ new member connected ⚡" },
          { t: "cmd", x: "vibes load --level max" },
          { t: "out", x: "> loading good vibes... 100%" },
          { t: "ok", x: "✓ done — welcome aboard" },
        ],
      },
      stats: {
        members: "members",
        support: "support",
        toxicity: "toxicity",
      },
    },
    about: {
      eyebrow: "// 01 — who we are",
      statementStart: "A cozy place for coders",
      statementMid: "of any level — from the first",
      statementAccent: "«Hello, World»",
      statementEnd: "to AI-assisted production.",
      cards: [
        {
          title: "Real help, fast",
          text: "Stuck on a bug? Drop it in the help channels or open a ticket — the community and our AI bot Pixie have your back.",
        },
        {
          title: "Ship projects",
          text: "Showcase your AI-built work, get honest feedback, find collaborators for your next side project or game server.",
        },
        {
          title: "Open for everyone",
          text: "Any language, any stack, any timezone. Pixie translates any message on demand.",
        },
      ],
      echo: '$ echo "faster together — and way more fun"',
    },
    features: {
      eyebrow: "// 02 — features",
      titleStart: "What's inside",
      titleAccent: "the server",
      items: [
        {
          tag: "🎫",
          title: "Ticket support system",
          text: "Private channels for tech help, questions and reports. Moderators answer, transcripts are saved.",
        },
        {
          tag: "🤖",
          title: "Pixie — AI bot",
          text: "AI assistant, moderation, welcome flows and on-demand translation: right-click a message → Apps → Pixie → Translate.",
        },
        {
          tag: "🛠️",
          title: "Build channels",
          text: "Web, bots, Minecraft servers, DevOps — pick your corner or start a new one.",
        },
        {
          tag: "🎉",
          title: "Events & collabs",
          text: "Code reviews, game nights and community projects run by the members themselves.",
        },
      ],
    },
    chat: {
      eyebrow: "// 03 — support",
      titleStart: "Tickets instead of",
      titleAccent: "noisy DMs",
      subtitle:
        "No noisy DMs, no lost messages. Here's the real support flow inside our Discord.",
      channelsLabel: "Text channels",
      channels: ["announcements", "general", "help", "showcase", "ticket-0042"],
      panel: {
        author: "Pixie",
        time: "Today at 6:42 PM",
        text: "Need tech help, want to report something or have a question for the team? Open a private ticket — only you and the moderators will see it.",
        button: "📩 Open a ticket",
      },
      modal: {
        title: "Open a ticket",
        field: "What's it about?",
        value: "Tech help",
        submit: "Create ticket",
        cancel: "Cancel",
      },
      created: "✅ Private channel #ticket-0042 created — only you and the mod team can see it.",
      steps: [
        "press «Open a ticket»",
        "pick a category",
        "#ticket-0042 created",
        "mod team is on it",
      ],
      reply: {
        author: "Moderator",
        time: "Today at 6:43 PM",
        text: "Hey! Describe your issue here — we're already on it.",
      },
    },
    rules: {
      eyebrow: "// 04 — rules",
      titleStart: "Six rules of",
      titleAccent: "good vibes",
      items: [
        {
          title: "Be respectful",
          text: "Beginners are welcome — no question is \"too dumb\".",
        },
        {
          title: "No spam or self-promo",
          text: "Share your work in the showcase channels instead.",
        },
        {
          title: "No NSFW or illegal content",
          text: "Zero tolerance for adult content, piracy and cheats.",
        },
        {
          title: "Any language works",
          text: "Pixie translates any message you don't understand.",
        },
        {
          title: "Support via tickets",
          text: "Don't DM moderators — open a ticket instead.",
        },
        {
          title: "No toxicity or harassment",
          text: "Argue about ideas, never attack people.",
        },
      ],
    },
    projects: {
      eyebrow: "// 05 — open source",
      titleStart: "OPEN",
      titleAccent: "SOURCE",
      subtitle:
        "Everything we build for the community is public in the GitHub organization. Pick a repo, open a PR, or suggest an idea.",
      term: [
        { p: "$", x: "git clone vibecoders/any-repo" },
        { p: ">", x: "fork → code → pull request" },
        { p: ">", x: "first merged PR = invite to the org" },
        { p: "#", x: "transparent. honest. open source" },
      ],
      cards: [
        {
          repo: "VibeMC",
          name: "VibeMC",
          description: "Minecraft server of the community.",
        },
        {
          repo: "Moderator-VibeCoders-Community",
          name: "Moderator-VibeCoders-Community",
          description: "Moderation tooling for the Discord server.",
        },
        {
          repo: "ofur-checker",
          name: "ofur-checker",
          description: "A checker utility built for community tasks.",
        },
        {
          repo: "VibeCoders-Community.github.io",
          name: "VibeCoders-Community.github.io",
          description: "This website.",
        },
      ],
    },
    activity: {
      eyebrow: "// 06 — activity",
      title: "Live from GitHub",
      subtitle: "What the community is building right now.",
      error: "Couldn't load the activity feed — check the GitHub organization instead.",
      pushed: "pushed to",
      pr: "opened a pull request in",
      issue: "opened an issue in",
      created: "created something in",
      release: "shipped a release in",
      starred: "starred",
      other: "was active in",
    },
    faq: {
      eyebrow: "// 07 — faq",
      title: "FAQ",
      subtitle: "Answers to the questions we hear most often.",
      items: [
        {
          q: "How do I join?",
          a: "Click the Discord invite link, accept the rules and say hi in #general. That's it — you're in.",
        },
        {
          q: "What are tickets and how do I open one?",
          a: "Tickets are private support channels between you and the mod team. Go to the tickets panel, press the button, pick a category — a private channel is created for you instantly.",
        },
        {
          q: "Which languages can I speak?",
          a: "Any language you like — the community is fully international. Don't understand a message? Right-click it → Apps → Pixie → Translate.",
        },
        {
          q: "Can I contribute to community projects?",
          a: "Absolutely. All our projects live in the GitHub organization — pick a repo, open a PR, or suggest your own idea in the projects channel.",
        },
        {
          q: "How do I become a moderator?",
          a: "Be active, helpful and drama-free. Admins invite trusted members to the team, and applications are announced in the community when we need new mods.",
        },
      ],
    },
    team: {
      eyebrow: "// 08 — people",
      titleStart: "Who keeps",
      titleAccent: "the vibe",
      subtitle: "The people who keep the server running and the vibes good.",
      owner: {
        role: "founder",
        text: "AI bots, tickets, automation and this website.",
      },
      defaultMember: {
        role: "team",
        text: "Part of the VibeCoders team.",
      },
      overrides: {
        skyricelis: {
          role: "hoster",
          text: "servers and infrastructure",
        },
        daniilalt035: {
          role: "ML engineer",
          text: "machine learning",
        },
        tot_samii_militarist: {
          role: "software engineer",
          text: "Rust · Python · C · C++",
        },
      },
      staffNote: "// staff applications are announced when new moderators are needed",
      path: {
        title: "Three steps to the team",
        steps: [
          {
            icon: "💬",
            title: "Join the Discord",
            text: "Hop in via the invite, accept the rules, pick your roles and say hi in #general. That's it — you're one of us.",
            cmd: "$ join --server vibecoders",
          },
          {
            icon: "🐙",
            title: "Contribute on GitHub",
            text: "Fork an organization repo and open a PR. After your first merged one — request an org invite via a ticket.",
            cmd: "$ gh pr create --fill",
          },
          {
            icon: "🎫",
            title: "Apply for staff",
            text: "Be active and helpful, then open a «Community» ticket and tell us about yourself. Admins invite trusted members.",
            cmd: "$ ticket open --type staff",
          },
        ],
      },
      roles: [
        {
          icon: "🛡️",
          title: "Admins",
          text: "Roles, channels, bots and community projects — the whole server infrastructure.",
        },
        {
          icon: "🔨",
          title: "Moderators",
          text: "Handle tickets, keep the chats clean and help newcomers find their way.",
        },
      ],
    },
    join: {
      eyebrow: "// 09 — get started",
      titleStart: "START",
      titleAccent: "HERE",
      subtitle:
        "Hop into the Discord, say hi, and ship your first AI-built project with us. It takes a minute.",
      discord: "Join on Discord",
      github: "GitHub organization",
      chip: "vibecoders.community",
      note: "be kind. no spam. just code and good vibes.",
    },
  },
  ru: {
    meta: {
      title: "VibeCoders — сообщество AI-вайб-кодинга",
      description:
        "VibeCoders — дружелюбное сообщество AI-вайб-кодинга в Discord. Создавай с AI-агентами, делись проектами и релизь вместе с нами.",
      ogImageAlt: "VibeCoders — сообщество AI-вайб-кодинга",
    },
    nav: {
      about: "О нас",
      features: "Возможности",
      projects: "Проекты",
      faq: "FAQ",
      team: "Команда",
      join: "Вступить",
    },
    a11y: {
      backToTop: "Наверх",
    },
    hero: {
      badge: "> DISCORD-СООБЩЕСТВО AI-ВАЙБ-КОДИНГА",
      titleStart: "VIBE",
      titleAccent: "CODERS",
      subtitle:
        "Дружелюбное место, где кодят с AI-агентами, учатся и релизят вместе. Задавай вопросы, делись проектами, находи teammates.",
      chip: "neon-terminal edition",
      ctaJoin: "Вступить в сообщество",
      ctaProjects: "Наши проекты",
      terminal: {
        title: "vibe — zsh",
        lines: [
          { t: "cmd", x: "pixie greet --all" },
          { t: "ok", x: "✓ новый участник подключился ⚡" },
          { t: "cmd", x: "vibes load --level max" },
          { t: "out", x: "> загрузка хорошего вайба... 100%" },
          { t: "ok", x: "✓ готово — добро пожаловать" },
        ],
      },
      stats: {
        members: "участников",
        support: "поддержка",
        toxicity: "токсичности",
      },
    },
    about: {
      eyebrow: "// 01 — кто мы",
      statementStart: "Уютное место для кодеров",
      statementMid: "любого уровня — от первого",
      statementAccent: "«Hello, World»",
      statementEnd: "до продакшна с AI.",
      cards: [
        {
          title: "Реальная помощь, быстро",
          text: "Застрял на баге? Кидай вопрос в help-каналы или открой тикет — сообщество и AI-бот Pixie подхватят.",
        },
        {
          title: "Релизь проекты",
          text: "Показывай проекты, собранные с AI, получай честный фидбек и находи соавторов для сайд-проекта или игрового сервера.",
        },
        {
          title: "Открыто для всех",
          text: "Любой язык, любой стек, любой часовой пояс. Pixie переведёт любое сообщение по запросу.",
        },
      ],
      echo: "$ echo «вместе быстрее — и намного веселее»",
    },
    features: {
      eyebrow: "// 02 — возможности",
      titleStart: "Что внутри",
      titleAccent: "сервера",
      items: [
        {
          tag: "🎫",
          title: "Тикет-система поддержки",
          text: "Приватные каналы для техпомощи, вопросов и репортов. Модераторы отвечают, транскрипты сохраняются.",
        },
        {
          tag: "🤖",
          title: "Pixie — AI-бот",
          text: "AI-ассистент, модерация, приветствия и перевод по запросу: ПКМ по сообщению → Apps → Pixie → Translate.",
        },
        {
          tag: "🛠️",
          title: "Каналы для разработки",
          text: "Веб, боты, Minecraft-серверы, DevOps — выбирай свой уголок или начни новый.",
        },
        {
          tag: "🎉",
          title: "Ивенты и коллабы",
          text: "Код-ревью, игровые вечера и общие проекты, которые запускают сами участники.",
        },
      ],
    },
    chat: {
      eyebrow: "// 03 — поддержка",
      titleStart: "Тикеты вместо",
      titleAccent: "шумных личек",
      subtitle:
        "Без шумных личек и потерянных сообщений. Вот реальный флоу поддержки в нашем Discord.",
      channelsLabel: "Текстовые каналы",
      channels: ["announcements", "general", "help", "showcase", "ticket-0042"],
      panel: {
        author: "Pixie",
        time: "Сегодня, в 18:42",
        text: "Нужна техпомощь, хочешь пожаловаться или есть вопрос к команде? Открой приватный тикет — его увидишь только ты и модераторы.",
        button: "📩 Открыть тикет",
      },
      modal: {
        title: "Открыть тикет",
        field: "О чём вопрос?",
        value: "Техпомощь",
        submit: "Создать тикет",
        cancel: "Отмена",
      },
      created: "✅ Создан приватный канал #ticket-0042 — его видишь только ты и команда модераторов.",
      steps: [
        "нажми «Открыть тикет»",
        "выбери категорию",
        "#ticket-0042 создан",
        "модераторы уже разбираются",
      ],
      reply: {
        author: "Модератор",
        time: "Сегодня, в 18:43",
        text: "Привет! Опиши проблему здесь — мы уже разбираемся.",
      },
    },
    rules: {
      eyebrow: "// 04 — правила",
      titleStart: "Шесть правил",
      titleAccent: "хорошего вайба",
      items: [
        {
          title: "Будь уважителен",
          text: "Новичкам рады — «глупых вопросов» не бывает.",
        },
        {
          title: "Без спама и самопиара",
          text: "Своими работами делись в каналах-витринах.",
        },
        {
          title: "Без NSFW и нелегальщины",
          text: "Нулевая терпимость к 18+, пиратству и читам.",
        },
        {
          title: "Пиши на любом языке",
          text: "Непонятное сообщение переведёт Pixie по запросу.",
        },
        {
          title: "Поддержка — через тикеты",
          text: "Не пиши модераторам в личку — открой тикет.",
        },
        {
          title: "Без токсичности и травли",
          text: "Спорь об идеях, не нападай на людей.",
        },
      ],
    },
    projects: {
      eyebrow: "// 05 — открытый код",
      titleStart: "ОТКРЫТЫЙ",
      titleAccent: "КОД",
      subtitle:
        "Всё, что мы создаём для сообщества, — публично в GitHub-организации. Выбирай репозиторий, открывай PR или предлагай идею.",
      term: [
        { p: "$", x: "git clone vibecoders/any-repo" },
        { p: ">", x: "fork → code → pull request" },
        { p: ">", x: "первый принятый PR = инвайт в org" },
        { p: "#", x: "прозрачно. по-честному. open source" },
      ],
      cards: [
        {
          repo: "VibeMC",
          name: "VibeMC",
          description: "Minecraft-сервер сообщества.",
        },
        {
          repo: "Moderator-VibeCoders-Community",
          name: "Moderator-VibeCoders-Community",
          description: "Инструменты модерации для Discord-сервера.",
        },
        {
          repo: "ofur-checker",
          name: "ofur-checker",
          description: "Утилита-чекер для задач сообщества.",
        },
        {
          repo: "VibeCoders-Community.github.io",
          name: "VibeCoders-Community.github.io",
          description: "Этот сайт.",
        },
      ],
    },
    activity: {
      eyebrow: "// 06 — активность",
      title: "Прямо из GitHub",
      subtitle: "Что сообщество пилит прямо сейчас.",
      error: "Не удалось загрузить ленту активности — загляни в GitHub-организацию.",
      pushed: "запушил(а) в",
      pr: "открыл(а) pull request в",
      issue: "открыл(а) issue в",
      created: "создал(а) кое-что в",
      release: "выпустил(а) релиз в",
      starred: "поставил(а) звезду",
      other: "проявил(а) активность в",
    },
    faq: {
      eyebrow: "// 07 — вопросы",
      title: "FAQ",
      subtitle: "Ответы на вопросы, которые мы слышим чаще всего.",
      items: [
        {
          q: "Как вступить?",
          a: "Перейди по ссылке-приглашению в Discord, прими правила и поздоровайся в #general. Всё — ты с нами.",
        },
        {
          q: "Что такое тикеты и как открыть один?",
          a: "Тикеты — приватные каналы поддержки между тобой и командой модераторов. Найди панель тикетов, нажми кнопку, выбери категорию — приватный канал создастся мгновенно.",
        },
        {
          q: "На каких языках можно общаться?",
          a: "На любом — сообщество полностью международное. Непонятное сообщение переведёт Pixie: ПКМ по сообщению → Apps → Pixie → Translate.",
        },
        {
          q: "Могу ли я поучаствовать в проектах сообщества?",
          a: "Конечно. Все наши проекты лежат в GitHub-организации — выбирай репозиторий, открывай PR или предложи свою идею в канале проектов.",
        },
        {
          q: "Как стать модератором?",
          a: "Будь активным, полезным и не токсичным. Админы приглашают в команду проверенных участников, а наборы анонсируются в сообществе, когда нужны новые моды.",
        },
      ],
    },
    team: {
      eyebrow: "// 08 — люди",
      titleStart: "Кто держит",
      titleAccent: "вайб",
      subtitle: "Люди, которые держат сервер в тонусе, а вайб — хорошим.",
      owner: {
        role: "основатель",
        text: "AI-боты, тикеты, автоматизация и этот сайт.",
      },
      defaultMember: {
        role: "команда",
        text: "Часть команды VibeCoders.",
      },
      overrides: {
        skyricelis: {
          role: "хостер",
          text: "серверы и инфраструктура",
        },
        daniilalt035: {
          role: "ML-инженер",
          text: "машинное обучение",
        },
        tot_samii_militarist: {
          role: "софтинженер",
          text: "Rust · Python · C · C++",
        },
      },
      staffNote: "// наборы в staff анонсируются, когда нужны новые модераторы",
      path: {
        title: "Три шага до команды",
        steps: [
          {
            icon: "💬",
            title: "Вступи в Discord",
            text: "Заходи по инвайту, прими правила, выбери роли и поздоровайся в #general. Всё — ты с нами.",
            cmd: "$ join --server vibecoders",
          },
          {
            icon: "🐙",
            title: "Контрибуть на GitHub",
            text: "Форкни репозиторий организации и открой PR. После первого принятого — запроси инвайт в org через тикет.",
            cmd: "$ gh pr create --fill",
          },
          {
            icon: "🎫",
            title: "Подай заявку в staff",
            text: "Будь активным и полезным, затем открой тикет «Community» и расскажи о себе. Админы приглашают проверенных.",
            cmd: "$ ticket open --type staff",
          },
        ],
      },
      roles: [
        {
          icon: "🛡️",
          title: "Админы",
          text: "Роли, каналы, боты и проекты сообщества — вся инфраструктура сервера.",
        },
        {
          icon: "🔨",
          title: "Модераторы",
          text: "Разбирают тикеты, следят за порядком в чатах и помогают новичкам освоиться.",
        },
      ],
    },
    join: {
      eyebrow: "// 09 — начни здесь",
      titleStart: "НАЧНИ",
      titleAccent: "ЗДЕСЬ",
      subtitle:
        "Залетай в Discord, поздоровайся и зарелизь свой первый AI-проект вместе с нами. Это займёт минуту.",
      discord: "Вступить в Discord",
      github: "GitHub-организация",
      chip: "vibecoders.community/ru",
      note: "будь добрым. без спама. только код и хороший вайб.",
    },
  },
} as const;

export const getUi = (lang: Lang) => ui[lang];
