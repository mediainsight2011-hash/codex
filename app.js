const newsData = [
  {
    id: 1,
    category: "Politics",
    title: {
      en: "Coalition unveils emergency inflation package ahead of budget vote",
      ml: "ബജറ്റ് വോട്ടിന് മുന്നോടിയായി വിലക്കയറ്റ നിയന്ത്രണ പാക്കേജ് പ്രഖ്യാപിച്ചു"
    },
    summary: {
      en: "Tax relief and food subsidies are expected to be tabled in parliament by evening session.",
      ml: "വൈകുന്നേര സെഷനിൽ നികുതി ഇളവും ഭക്ഷ്യ സബ്സിഡിയും അവതരിപ്പിക്കാൻ സാധ്യത."
    },
    minutes: 12,
    views: 68200,
    comments: 941,
    image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&w=900&q=65",
    breaking: true
  },
  {
    id: 2,
    category: "Sports",
    title: {
      en: "Title race intensifies after late stoppage-time winner",
      ml: "അവസാന നിമിഷ ഗോളോടെ ചാമ്പ്യൻഷിപ്പ് പോരാട്ടം കടുപ്പം"
    },
    summary: {
      en: "Crowd attendance records tumble as weekend fixtures deliver drama.",
      ml: "വാരാന്ത്യ മത്സരങ്ങളിൽ ആവേശം നിറഞ്ഞപ്പോള്‍ പ്രേക്ഷക റെക്കോർഡ് മറികടന്നു."
    },
    minutes: 19,
    views: 53100,
    comments: 722,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=65",
    breaking: true
  },
  {
    id: 3,
    category: "Entertainment",
    title: {
      en: "Indie thriller stuns box office with record first-day occupancy",
      ml: "സ്വതന്ത്ര ത്രില്ലർ ആദ്യദിനത്തിൽ തന്നെ ബോക്സ് ഓഫീസ് റെക്കോർഡ്"
    },
    summary: {
      en: "Analysts credit social video buzz and regional language dubbing strategy.",
      ml: "സോഷ്യൽ മീഡിയ പ്രചാരവും പ്രാദേശിക ഡബ്ബിംഗും വിജയകാരണമെന്ന് വിദഗ്ധർ."
    },
    minutes: 34,
    views: 44800,
    comments: 603,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=65",
    breaking: false
  },
  {
    id: 4,
    category: "Local News",
    title: {
      en: "City launches 24x7 flood-response control room before monsoon",
      ml: "മൺസൂൺ മുമ്പ് 24x7 വെള്ളപ്പൊക്ക നിയന്ത്രണ സെൽ ആരംഭിച്ചു"
    },
    summary: {
      en: "Residents can submit blocked-drain photos via a one-tap mobile hotline.",
      ml: "തടസ്സപ്പെട്ട കുഴൽനാഴികളുടെ ചിത്രങ്ങൾ മൊബൈൽ ഹോട്ട്‌ലൈനിലൂടെ അപ്‌ലോഡ് ചെയ്യാം."
    },
    minutes: 41,
    views: 29900,
    comments: 385,
    image: "https://images.unsplash.com/photo-1470004914212-05527e49370b?auto=format&fit=crop&w=900&q=65",
    breaking: false
  },
  {
    id: 5,
    category: "Politics",
    title: {
      en: "Opposition seeks judicial review of data privacy ordinance",
      ml: "ഡാറ്റാ സ്വകാര്യത ഓർഡിനൻസിന് ന്യായപരിശോധന ആവശ്യപ്പെട്ടു"
    },
    summary: {
      en: "Civil groups argue the draft lacks transparent oversight mechanisms.",
      ml: "നിയന്ത്രണ സംവിധാനം വ്യക്തതയില്ലെന്ന് പൗരസമിതികൾ വിമർശനം."
    },
    minutes: 56,
    views: 27700,
    comments: 318,
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=900&q=65",
    breaking: false
  },
  {
    id: 6,
    category: "Entertainment",
    title: {
      en: "Streaming platforms race for short-form newsroom collaborations",
      ml: "ഷോർട്ട്-ഫോം വാർത്താ സഹകരണത്തിനായി സ്ട്രീമിംഗ് പ്ലാറ്റ്ഫോമുകൾ മത്സരം"
    },
    summary: {
      en: "Creators are producing 60-second explainers to boost retention.",
      ml: "റീറ്റൻഷൻ വർദ്ധിപ്പിക്കാൻ 60 സെക്കൻഡ് എക്സ്പ്ലെയ്‌നറുകൾ വർധിക്കുന്നു."
    },
    minutes: 78,
    views: 22300,
    comments: 199,
    image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=900&q=65",
    breaking: false
  },
  {
    id: 7,
    category: "Sports",
    title: {
      en: "National team names youngest captain in 25 years",
      ml: "25 വർഷത്തിനിടെ ഏറ്റവും പ്രായം കുറഞ്ഞ ക്യാപ്റ്റനെ ദേശീയ ടീം പ്രഖ്യാപിച്ചു"
    },
    summary: {
      en: "Selection committee says the change reflects a long-term rebuild.",
      ml: "ദീർഘകാല പുനർനിർമാണത്തിന്റെ ഭാഗമായി തീരുമാനം എന്നും തെരഞ്ഞെടുപ്പ് സമിതി."
    },
    minutes: 83,
    views: 31700,
    comments: 407,
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=65",
    breaking: false
  },
  {
    id: 8,
    category: "Local News",
    title: {
      en: "Metro extends early morning service for healthcare workers",
      ml: "ആരോഗ്യപ്രവർത്തകർക്കായി മെട്രോ രാവിലെ നേരത്തെയുള്ള സർവീസ് നീട്ടി"
    },
    summary: {
      en: "Pilot phase starts Monday across three high-demand corridors.",
      ml: "മൂന്ന് തിരക്കേറിയ റൂട്ടുകളിൽ തിങ്കളാഴ്ച മുതൽ പൈലറ്റ് പദ്ധതി."
    },
    minutes: 105,
    views: 18100,
    comments: 122,
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=900&q=65",
    breaking: false
  }
];

const state = { language: "en", filtered: [...newsData] };

const tickerTrack = document.getElementById("ticker-track");
const heroGrid = document.getElementById("hero-grid");
const trendingList = document.getElementById("trending-list");
const quickGrid = document.getElementById("quick-grid");
const searchInput = document.getElementById("search-input");
const langToggle = document.getElementById("lang-toggle");
const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const storyTemplate = document.getElementById("story-template");
const categorySections = document.querySelectorAll(".category-grid");

function formatViews(n) {
  return `${(n / 1000).toFixed(1)}K`;
}

function createStoryCard(story, compact = false) {
  const node = storyTemplate.content.firstElementChild.cloneNode(true);
  const img = node.querySelector("img");
  const badge = node.querySelector(".badge");
  const heading = node.querySelector("h3");
  const summary = node.querySelector("p");
  const meta = node.querySelector(".meta");

  img.src = story.image;
  img.alt = story.title[state.language];
  badge.textContent = story.breaking ? (state.language === "en" ? "Breaking" : "ബ്രേക്കിംഗ്") : story.category;
  heading.textContent = story.title[state.language];
  summary.textContent = story.summary[state.language];
  meta.textContent = `${story.minutes} min ago · ${formatViews(story.views)} views`;

  if (compact) {
    summary.remove();
  }

  node.setAttribute("itemscope", "");
  node.setAttribute("itemtype", "https://schema.org/NewsArticle");
  heading.setAttribute("itemprop", "headline");
  summary?.setAttribute("itemprop", "description");

  return node;
}

function populateTicker() {
  const featured = newsData.filter((n) => n.breaking).slice(0, 4);
  tickerTrack.innerHTML = featured
    .map((item) => `<span>⚡ ${item.title[state.language]} </span>`)
    .join("");
}

function populateHero() {
  heroGrid.innerHTML = "";
  state.filtered
    .slice(0, 5)
    .forEach((story) => heroGrid.append(createStoryCard(story)));
}

function populateTrending() {
  trendingList.innerHTML = "";
  [...state.filtered]
    .sort((a, b) => b.views + b.comments - (a.views + a.comments))
    .slice(0, 6)
    .forEach((story, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${index + 1}. ${story.title[state.language]}</strong>
        <div class="trending-stats">👁 ${formatViews(story.views)} · 💬 ${story.comments}</div>
      `;
      trendingList.append(li);
    });
}

function populateQuickCards() {
  quickGrid.innerHTML = "";
  state.filtered.slice(2, 6).forEach((story) => quickGrid.append(createStoryCard(story, true)));
}

function populateCategories() {
  categorySections.forEach((section) => {
    const category = section.dataset.category;
    section.innerHTML = "";
    state.filtered
      .filter((story) => story.category === category)
      .slice(0, 4)
      .forEach((story) => section.append(createStoryCard(story, true)));
  });
}

function render() {
  populateTicker();
  populateHero();
  populateTrending();
  populateQuickCards();
  populateCategories();
}

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  state.filtered = newsData.filter((story) => {
    const title = story.title[state.language].toLowerCase();
    const summary = story.summary[state.language].toLowerCase();
    return title.includes(query) || summary.includes(query);
  });
  render();
});

langToggle.addEventListener("click", () => {
  state.language = state.language === "en" ? "ml" : "en";
  render();
});

themeToggle.addEventListener("click", () => {
  const root = document.documentElement;
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  navLinks.classList.toggle("open");
});

setInterval(() => {
  const first = newsData.shift();
  newsData.push(first);
  state.filtered = [...newsData];
  populateTicker();
}, 9000);

render();
