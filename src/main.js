import "./styles/main.scss";
import App from "./app.jsx";
import { getSiteContent } from "./content/site-content.js";

document.body.innerHTML = App(getSiteContent());

const THEME_KEY = "ks-theme";
const THEME_PURPLE = "purple";
const THEME_DARK = "dark";
const THEME_LIGHT = "light";
const THEMES = [THEME_PURPLE, THEME_DARK, THEME_LIGHT];

const THEME_LABELS = {
  [THEME_PURPLE]: "Purple",
  [THEME_DARK]: "Dark",
  [THEME_LIGHT]: "Light",
};

const THEME_ICONS = {
  [THEME_PURPLE]:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5L13.8 8.2L18.5 10L13.8 11.8L12 16.5L10.2 11.8L5.5 10L10.2 8.2L12 3.5Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 14.5L19.3 16.5L21.3 17.3L19.3 18.1L18.5 20.1L17.7 18.1L15.7 17.3L17.7 16.5L18.5 14.5Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 14.8L6.6 16.2L8 16.8L6.6 17.4L6 18.8L5.4 17.4L4 16.8L5.4 16.2L6 14.8Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  [THEME_DARK]:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 14.5C19.3 17.8 16.3 20.2 12.7 20.2C8.3 20.2 4.8 16.7 4.8 12.3C4.8 8.7 7.2 5.7 10.5 4.8C9.7 5.8 9.2 7.1 9.2 8.6C9.2 11.9 11.9 14.6 15.2 14.6C16.7 14.6 18 14.1 19 13.3C19.5 13.7 19.9 14.1 20.2 14.5Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  [THEME_LIGHT]:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3.8" stroke="currentColor" stroke-width="1.8"/><path d="M12 2.8V5.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M12 18.9V21.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M2.8 12H5.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M18.9 12H21.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5.5 5.5L7.1 7.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M16.9 16.9L18.5 18.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M16.9 7.1L18.5 5.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5.5 18.5L7.1 16.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
};

function getInitialTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (THEMES.includes(savedTheme)) {
    return savedTheme;
  }

  return THEME_DARK;
}

function applyTheme(theme, toggleButton) {
  const themeLabel = THEME_LABELS[theme];
  document.documentElement.setAttribute("data-theme", theme);
  toggleButton.setAttribute("data-theme-mode", theme);
  toggleButton.setAttribute("title", `Theme: ${themeLabel}`);
  toggleButton.setAttribute("aria-label", `Switch theme. Current: ${themeLabel}`);

  const iconNode = toggleButton.querySelector(".theme-toggle__icon");

  if (iconNode) {
    iconNode.innerHTML = THEME_ICONS[theme];
  }
}

function initThemeToggle() {
  const toggleButton = document.querySelector("[data-theme-toggle]");

  if (!toggleButton) {
    return;
  }

  let currentTheme = getInitialTheme();
  applyTheme(currentTheme, toggleButton);

  toggleButton.addEventListener("click", () => {
    const currentThemeIndex = THEMES.indexOf(currentTheme);
    const nextThemeIndex = (currentThemeIndex + 1) % THEMES.length;
    currentTheme = THEMES[nextThemeIndex];
    localStorage.setItem(THEME_KEY, currentTheme);
    applyTheme(currentTheme, toggleButton);
  });
}

initThemeToggle();
function initHeaderScrollState() {
  const updateHeaderState = () => {
    document.body.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
}

initHeaderScrollState();
