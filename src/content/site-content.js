export const CONTENT_STORAGE_KEY = "ks-site-content";

export const defaultSiteContent = {
  hero: {
    eyebrow: "Frontend Developer",
    title: "Kirill Shekhurdin",
    subtitle:
      "Создаю быстрые и визуально цельные веб-интерфейсы: от идеи и прототипа до продакшн-версии на современном стеке.",
    primaryButtonText: "Смотреть стек",
    secondaryButtonText: "Обсудить проект",
    tags: ["Vite", "JSX", "HTML5", "BEM", "JS", "SCSS", "Figma", "CMS", "Git Workflow"],
  },
  hardSkills: {
    eyebrow: "Технологическая база",
    title: "Hard Skills",
    items: [
      {
        title: "JavaScript / TypeScript",
        text: "Пишу структурируемый код, работаю с модульной архитектурой и уделяю внимание читабельности.",
      },
      {
        title: "HTML5 + SCSS",
        text: "Верстаю адаптивные интерфейсы, использую BEM-подход, переменные, миксины и понятную структуру слоев.",
      },
      {
        title: "Vite + Build Pipeline",
        text: "Настраиваю быструю сборку, оптимизацию ассетов и удобный DX для развития проекта без лишнего шума.",
      },
      {
        title: "Git / CI Mindset",
        text: "Дроблю изменения на логичные коммиты, поддерживаю понятную историю и контролируемый релизный процесс.",
      },
    ],
  },
  softSkills: {
    eyebrow: "Подход к работе",
    title: "Soft Skills",
    items: [
      "Системное мышление и декомпозиция задач",
      "Коммуникация с командой и прозрачная отчётность",
      "Ответственность за качество и сроки",
      "Быстрая адаптация под требования продукта",
      "Внимание к UX-деталям и доступности",
      "Проактивность в улучшении процессов",
    ],
  },
  contact: {
    eyebrow: "Открыт к сотрудничеству",
    title: "Готов обсудить лендинг, интерфейс или продуктовую задачу",
    buttonText: "Написать в Telegram",
    buttonUrl: "https://t.me/pspsosos",
  },
  footer: {
    copyName: "Kirill Shekhurdin",
  },
};

function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeDeep(base, override) {
  if (!isObject(base)) {
    return base;
  }

  const result = { ...base };

  Object.keys(base).forEach((key) => {
    const baseValue = base[key];
    const overrideValue = override?.[key];

    if (Array.isArray(baseValue)) {
      result[key] = Array.isArray(overrideValue) ? overrideValue : baseValue;
      return;
    }

    if (isObject(baseValue)) {
      result[key] = mergeDeep(baseValue, isObject(overrideValue) ? overrideValue : undefined);
      return;
    }

    result[key] = overrideValue ?? baseValue;
  });

  return result;
}

export function getSiteContent() {
  const raw = localStorage.getItem(CONTENT_STORAGE_KEY);

  if (!raw) {
    return defaultSiteContent;
  }

  try {
    const parsed = JSON.parse(raw);
    return mergeDeep(defaultSiteContent, parsed);
  } catch {
    return defaultSiteContent;
  }
}

export function saveSiteContent(content) {
  localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content));
}

export function resetSiteContent() {
  localStorage.removeItem(CONTENT_STORAGE_KEY);
}