export type Lang = "en" | "ru";

export const ui = {
  en: {
    meta: {
      title: "VibeCoders — Code with good vibes",
      description:
        "VibeCoders is a friendly developer community on Discord. Share projects, get help, and build together.",
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
      badge: "⚡ developer community",
      titleStart: "Code with",
      titleAccent: "good vibes",
      subtitle:
        "VibeCoders is a friendly Discord community of developers who build, learn and ship together. Ask questions, share projects, find teammates.",
      ctaJoin: "Join the community",
      ctaProjects: "See our projects",
      stats: {
        members: "members",
        support: "support",
        toxicity: "toxicity",
      },
    },
    about: {
      eyebrow: "who we are",
      title: "What is VibeCoders?",
      subtitle:
        "A chill place for coders of any level — from first \"Hello, World\" to production systems. We believe learning is faster (and way more fun) together.",
      cards: [
        {
          icon: "💬",
          title: "Real help, fast",
          text: "Stuck on a bug? Drop it in the help channels or open a support ticket — the community and our bot Pixie have your back.",
        },
        {
          icon: "🚀",
          title: "Ship projects",
          text: "Showcase your work, get honest feedback, find collaborators for your next side project or game server.",
        },
        {
          icon: "🌍",
          title: "Open for everyone",
          text: "Any language, any stack, any timezone. A fully international community — Pixie translates any message on demand.",
        },
      ],
    },
    features: {
      eyebrow: "features",
      title: "What's inside",
      items: [
        {
          tag: "🎫",
          title: "Ticket support system",
          text: "Private support channels for tech help, community questions, projects and reports — handled by moderators with full transcripts.",
        },
        {
          tag: "🤖",
          title: "Pixie, our community bot",
          text: "Custom-built moderation, welcome flows and on-demand translation: right-click any message → Apps → Pixie → Translate.",
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
      eyebrow: "support flow",
      title: "How tickets work",
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
      reply: {
        author: "Moderator",
        time: "Today at 6:43 PM",
        text: "Hey! Describe your issue here — we're already on it.",
      },
    },
    rules: {
      eyebrow: "ground rules",
      title: "Community rules",
      subtitle: "Six simple rules that keep the vibes good.",
      items: [
        {
          title: "Be respectful",
          text: "Treat others the way you want to be treated. Beginners are welcome — no question is \"too dumb\".",
        },
        {
          title: "No spam or self-promo",
          text: "Ads, invite links and flooding get removed. Share your work in the showcase channels instead.",
        },
        {
          title: "No NSFW or illegal content",
          text: "Zero tolerance: no adult content, piracy, cheats, or anything against the law or Discord ToS.",
        },
        {
          title: "Any language works",
          text: "Write in whatever language you're comfortable with. Need a translation? Right-click a message → Apps → Pixie → Translate.",
        },
        {
          title: "Use tickets for support",
          text: "Don't ping moderators in DMs — open a ticket and the whole team will see your request.",
        },
        {
          title: "No toxicity or harassment",
          text: "Flaming, bullying and drama stay out. Disagree on ideas, never attack people.",
        },
      ],
    },
    faq: {
      eyebrow: "good to know",
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
      eyebrow: "the people",
      title: "The team",
      subtitle: "The people who keep the server running and the vibes good.",
      owner: {
        role: "Owner & Founder",
        text: "Builds the community infrastructure: bots, ticket system, automation and this website.",
      },
      defaultMember: {
        role: "Team member",
        text: "Part of the VibeCoders team.",
      },
      overrides: {
        skyricelis: {
          role: "Hoster",
          text: "Our hoster — keeps the community's servers and infrastructure online.",
        },
        daniilalt035: {
          role: "ML Engineer",
          text: "Machine learning engineer of the community.",
        },
        tot_samii_militarist: {
          role: "Software Engineer",
          text: "Rust, Python, C and C++ developer.",
        },
      },
      path: {
        title: "How to join the team",
        steps: [
          {
            title: "1. Join the Discord",
            text: "Hop in via the invite, pick your roles and stay active — help others in the channels.",
          },
          {
            title: "2. Contribute on GitHub",
            text: "Fork any organization repo and open a pull request. After your first merged PR, request an invite to the GitHub organization via a Project ticket.",
          },
          {
            title: "3. Apply for staff",
            text: "Open a Community ticket and tell us about yourself. Admins invite trusted, active members when new moderators are needed.",
          },
        ],
      },
      roles: [
        {
          icon: "🛡️",
          title: "Admins",
          text: "Keep the server running: roles, channels, bots and community projects.",
        },
        {
          icon: "🔨",
          title: "Moderators",
          text: "Handle tickets, keep the chats clean and help newcomers find their way.",
        },
      ],
    },
    projects: {
      eyebrow: "open source",
      title: "Open source",
      subtitle: "Everything we build for the community is public on GitHub.",
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
    pixieChat: {
      open: "Chat with Pixie",
      title: "Pixie",
      status: "online",
      demoBadge: "scripted demo",
      greeting:
        "Hey! I'm Pixie ⚡ — the community bot. Ask me about tickets, translation, the team or how to join. Heads up: this is a scripted demo — the real me lives in our Discord.",
      placeholder: "Ask Pixie something…",
      send: "Send",
      typing: "Pixie is typing…",
      fallback:
        "Demo me has a limited vocabulary 😅 Try asking about: tickets, translate, join, team or github.",
      answers: [
        {
          keys: ["ticket", "support", "report", "тикет", "репорт", "поддерж"],
          text: "Tickets are private support channels between you and the mod team. In Discord, find the tickets panel, press a button, pick a category — done, your private channel appears instantly.",
        },
        {
          keys: ["translat", "language", "russian", "english", "перевод", "язык"],
          text: "Speak any language you like! To translate a message, right-click it → Apps → Pixie → Translate. Works on any message in the server.",
        },
        {
          keys: ["join", "invite", "вступ", "инвайт", "зайти"],
          text: "Easy: hit «Join on Discord» below, pick your roles and say hi in #general. It takes a minute.",
        },
        {
          keys: ["team", "moderator", "admin", "staff", "команд", "модер", "админ"],
          text: "The team section below shows everyone with the TeamCommunity role. To join the staff: be active, contribute on GitHub, then open a Community ticket — admins review applications when new mods are needed.",
        },
        {
          keys: ["github", "project", "repo", "code", "гитхаб", "проект", "репо"],
          text: "All our projects are open source in the VibeCoders-Community GitHub org. Fork a repo, open a PR — after your first merged PR you can request an org invite via a Project ticket.",
        },
        {
          keys: ["hi", "hello", "hey", "yo", "привет", "здарова", "хай"],
          text: "Hey hey! ⚡ What can I tell you about — tickets, translation, the team, or joining us?",
        },
      ],
    },
    activity: {
      eyebrow: "live activity",
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
    join: {
      eyebrow: "get started",
      title: "Ready to vibe?",
      subtitle: "Hop into the Discord, say hi, and open your first ticket. It takes a minute.",
      discord: "Join on Discord",
      github: "GitHub organization",
      note: "Be kind. No spam, no toxicity — just code and good vibes.",
    },
  },
  ru: {
    meta: {
      title: "VibeCoders — Кодь с хорошим вайбом",
      description:
        "VibeCoders — дружелюбное сообщество разработчиков в Discord. Делись проектами, получай помощь и создавай вместе с нами.",
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
      badge: "⚡ сообщество разработчиков",
      titleStart: "Кодь с",
      titleAccent: "хорошим вайбом",
      subtitle:
        "VibeCoders — дружелюбное Discord-сообщество разработчиков, которые создают, учатся и релизят вместе. Задавай вопросы, делись проектами, находи teammates.",
      ctaJoin: "Вступить в сообщество",
      ctaProjects: "Наши проекты",
      stats: {
        members: "участников",
        support: "поддержка",
        toxicity: "токсичности",
      },
    },
    about: {
      eyebrow: "кто мы",
      title: "Что такое VibeCoders?",
      subtitle:
        "Уютное место для кодеров любого уровня — от первого «Hello, World» до продакшн-систем. Мы верим, что вместе учиться быстрее (и намного веселее).",
      cards: [
        {
          icon: "💬",
          title: "Реальная помощь, быстро",
          text: "Застрял на баге? Кидай в help-каналы или открой тикет — сообщество и наш бот Pixie помогут.",
        },
        {
          icon: "🚀",
          title: "Релизь проекты",
          text: "Показывай свои работы, получай честный фидбек, находи соавторов для сайд-проекта или игрового сервера.",
        },
        {
          icon: "🌍",
          title: "Открыто для всех",
          text: "Любой язык, любой стек, любой часовой пояс. Полностью международное сообщество — Pixie переведёт любое сообщение по запросу.",
        },
      ],
    },
    features: {
      eyebrow: "возможности",
      title: "Что внутри",
      items: [
        {
          tag: "🎫",
          title: "Тикет-система поддержки",
          text: "Приватные каналы поддержки для техпомощи, вопросов по сообществу, проектов и репортов — модераторы отвечают, транскрипты сохраняются.",
        },
        {
          tag: "🤖",
          title: "Pixie — наш бот",
          text: "Самописная модерация, приветствия и перевод по запросу: ПКМ по сообщению → Apps → Pixie → Translate.",
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
      eyebrow: "поддержка",
      title: "Как работают тикеты",
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
      reply: {
        author: "Модератор",
        time: "Сегодня, в 18:43",
        text: "Привет! Опиши проблему здесь — мы уже разбираемся.",
      },
    },
    rules: {
      eyebrow: "правила",
      title: "Правила сообщества",
      subtitle: "Шесть простых правил, которые сохраняют хороший вайб.",
      items: [
        {
          title: "Будь уважителен",
          text: "Относись к другим так, как хочешь, чтобы относились к тебе. Новичкам рады — «глупых вопросов» не бывает.",
        },
        {
          title: "Без спама и самопиара",
          text: "Реклама, инвайт-ссылки и флуд удаляются. Своими работами делись в каналах-витринах.",
        },
        {
          title: "Без NSFW и нелегальщины",
          text: "Нулевая терпимость: никакого 18+, пиратства, читов и ничего против закона или правил Discord.",
        },
        {
          title: "Пиши на любом языке",
          text: "Общайся на удобном тебе языке. Нужен перевод? ПКМ по сообщению → Apps → Pixie → Translate.",
        },
        {
          title: "Поддержка — через тикеты",
          text: "Не пиши модераторам в личку — открой тикет, и твой запрос увидит вся команда.",
        },
        {
          title: "Без токсичности и травли",
          text: "Флейм, буллинг и драма остаются за дверью. Спорь об идеях, не нападай на людей.",
        },
      ],
    },
    faq: {
      eyebrow: "полезное",
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
      eyebrow: "люди",
      title: "Команда",
      subtitle: "Люди, которые держат сервер в тонусе, а вайб — хорошим.",
      owner: {
        role: "Владелец и основатель",
        text: "Строит инфраструктуру сообщества: боты, тикет-система, автоматизация и этот сайт.",
      },
      defaultMember: {
        role: "Участник команды",
        text: "Часть команды VibeCoders.",
      },
      overrides: {
        skyricelis: {
          role: "Хостер",
          text: "Наш хостер — держит серверы и инфраструктуру сообщества в онлайне.",
        },
        daniilalt035: {
          role: "ML-инженер",
          text: "Инженер машинного обучения сообщества.",
        },
        tot_samii_militarist: {
          role: "Софтинженер",
          text: "Разработчик на Rust, Python, C и C++.",
        },
      },
      path: {
        title: "Как попасть в команду",
        steps: [
          {
            title: "1. Вступи в Discord",
            text: "Заходи по инвайту, выбери роли и будь активен — помогай другим в каналах.",
          },
          {
            title: "2. Контрибуть на GitHub",
            text: "Форкни любой репозиторий организации и открой pull request. После первого принятого PR запроси инвайт в GitHub-организацию через тикет «Project».",
          },
          {
            title: "3. Подай заявку в staff",
            text: "Открой тикет «Community» и расскажи о себе. Админы приглашают в команду проверенных активных участников, когда нужны новые модераторы.",
          },
        ],
      },
      roles: [
        {
          icon: "🛡️",
          title: "Админы",
          text: "Поддерживают работу сервера: роли, каналы, боты и проекты сообщества.",
        },
        {
          icon: "🔨",
          title: "Модераторы",
          text: "Разбирают тикеты, следят за порядком в чатах и помогают новичкам освоиться.",
        },
      ],
    },
    projects: {
      eyebrow: "открытый код",
      title: "Открытый код",
      subtitle: "Всё, что мы создаём для сообщества, публично на GitHub.",
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
    pixieChat: {
      open: "Чат с Pixie",
      title: "Pixie",
      status: "в сети",
      demoBadge: "скриптовое демо",
      greeting:
        "Привет! Я Pixie ⚡ — бот сообщества. Спроси меня про тикеты, перевод, команду или как вступить. Учти: это скриптовое демо — настоящая я живу в нашем Discord.",
      placeholder: "Спроси Pixie о чём-нибудь…",
      send: "Отправить",
      typing: "Pixie печатает…",
      fallback:
        "У демо-версии скромный словарный запас 😅 Попробуй спросить про: тикеты, перевод, вступление, команду или github.",
      answers: [
        {
          keys: ["ticket", "support", "report", "тикет", "репорт", "поддерж", "помощ"],
          text: "Тикеты — приватные каналы поддержки между тобой и модераторами. В Discord найди панель тикетов, нажми кнопку, выбери категорию — приватный канал появится мгновенно.",
        },
        {
          keys: ["translat", "language", "russian", "english", "перевод", "язык", "перевести"],
          text: "Общайся на любом языке! Чтобы перевести сообщение: ПКМ по нему → Apps → Pixie → Translate. Работает с любым сообщением на сервере.",
        },
        {
          keys: ["join", "invite", "вступ", "инвайт", "зайти", "присоедин"],
          text: "Проще простого: жми «Вступить в Discord» ниже, выбери роли и поздоровайся в #general. Минутка делов.",
        },
        {
          keys: ["team", "moderator", "admin", "staff", "команд", "модер", "админ", "стафф"],
          text: "В секции команды ниже — все с ролью TeamCommunity. Чтобы попасть в staff: будь активен, контрибуть на GitHub, затем открой тикет «Community» — админы рассматривают заявки, когда нужны новые модераторы.",
        },
        {
          keys: ["github", "project", "repo", "code", "гитхаб", "проект", "репо", "код"],
          text: "Все наши проекты в открытом доступе в GitHub-организации VibeCoders-Community. Форкай репозиторий, открывай PR — после первого принятого PR можно запросить инвайт в организацию через тикет «Project».",
        },
        {
          keys: ["hi", "hello", "hey", "yo", "привет", "здарова", "хай", "ку"],
          text: "Привет-привет! ⚡ О чём рассказать — тикеты, перевод, команда или как к нам попасть?",
        },
      ],
    },
    activity: {
      eyebrow: "активность",
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
    join: {
      eyebrow: "начни здесь",
      title: "Готов к вайбу?",
      subtitle: "Залетай в Discord, поздоровайся и открой свой первый тикет. Это займёт минуту.",
      discord: "Вступить в Discord",
      github: "GitHub-организация",
      note: "Будь добрым. Без спама и токсичности — только код и хороший вайб.",
    },
  },
} as const;

export const getUi = (lang: Lang) => ui[lang];
