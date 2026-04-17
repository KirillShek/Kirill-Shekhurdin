import "../styles/admin.scss";
import {
  defaultSiteContent,
  getSiteContent,
  resetSiteContent,
  saveSiteContent,
} from "../content/site-content.js";

function toLines(values) {
  return values.join("\n");
}

function hardSkillsToLines(items) {
  return items.map((item) => `${item.title} | ${item.text}`).join("\n");
}

function parseLines(value) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function parseHardSkills(value) {
  return parseLines(value)
    .map((line) => {
      const [title, ...rest] = line.split("|");
      const text = rest.join("|").trim();

      if (!title?.trim() || !text) {
        return null;
      }

      return { title: title.trim(), text };
    })
    .filter(Boolean);
}

function renderAdmin() {
  document.body.innerHTML = `
    <main class="admin-page">
      <div class="admin-wrap">
        <header class="admin-head">
          <h1 class="admin-title">Админ-панель лендинга</h1>
          <div class="admin-actions">
            <a class="admin-link" href="/" target="_blank" rel="noreferrer">Открыть сайт</a>
          </div>
        </header>

        <form class="admin-form" id="admin-form">
          <section class="admin-section">
            <h2>Hero</h2>
            <label>Eyebrow <input name="heroEyebrow" type="text" /></label>
            <label>Title <input name="heroTitle" type="text" /></label>
            <label>Subtitle <textarea name="heroSubtitle" rows="3"></textarea></label>
            <label>Primary button <input name="heroPrimaryBtn" type="text" /></label>
            <label>Secondary button <input name="heroSecondaryBtn" type="text" /></label>
            <label>Теги (по одному в строке) <textarea name="heroTags" rows="6"></textarea></label>
          </section>

          <section class="admin-section">
            <h2>Hard Skills</h2>
            <label>Eyebrow <input name="hardEyebrow" type="text" /></label>
            <label>Title <input name="hardTitle" type="text" /></label>
            <label>Карточки: формат <code>Заголовок | Описание</code> (по одной в строке)
              <textarea name="hardItems" rows="8"></textarea>
            </label>
          </section>

          <section class="admin-section">
            <h2>Soft Skills</h2>
            <label>Eyebrow <input name="softEyebrow" type="text" /></label>
            <label>Title <input name="softTitle" type="text" /></label>
            <label>Пункты (по одному в строке) <textarea name="softItems" rows="7"></textarea></label>
          </section>

          <section class="admin-section">
            <h2>Contact</h2>
            <label>Eyebrow <input name="contactEyebrow" type="text" /></label>
            <label>Title <input name="contactTitle" type="text" /></label>
            <label>Button text <input name="contactBtnText" type="text" /></label>
            <label>Button URL <input name="contactBtnUrl" type="url" /></label>
          </section>

          <section class="admin-section">
            <h2>Footer</h2>
            <label>Copy name <input name="footerName" type="text" /></label>
          </section>

          <footer class="admin-footer">
            <button type="submit" class="admin-btn">Сохранить изменения</button>
            <button type="button" class="admin-btn admin-btn--ghost" id="reset-btn">Сбросить к дефолту</button>
            <p class="admin-status" id="admin-status" aria-live="polite"></p>
          </footer>
        </form>
      </div>
    </main>
  `;
}

function fillForm(form, content) {
  form.heroEyebrow.value = content.hero.eyebrow;
  form.heroTitle.value = content.hero.title;
  form.heroSubtitle.value = content.hero.subtitle;
  form.heroPrimaryBtn.value = content.hero.primaryButtonText;
  form.heroSecondaryBtn.value = content.hero.secondaryButtonText;
  form.heroTags.value = toLines(content.hero.tags);

  form.hardEyebrow.value = content.hardSkills.eyebrow;
  form.hardTitle.value = content.hardSkills.title;
  form.hardItems.value = hardSkillsToLines(content.hardSkills.items);

  form.softEyebrow.value = content.softSkills.eyebrow;
  form.softTitle.value = content.softSkills.title;
  form.softItems.value = toLines(content.softSkills.items);

  form.contactEyebrow.value = content.contact.eyebrow;
  form.contactTitle.value = content.contact.title;
  form.contactBtnText.value = content.contact.buttonText;
  form.contactBtnUrl.value = content.contact.buttonUrl;

  form.footerName.value = content.footer.copyName;
}

function buildContentFromForm(form) {
  const hardItems = parseHardSkills(form.hardItems.value);

  return {
    hero: {
      eyebrow: form.heroEyebrow.value.trim(),
      title: form.heroTitle.value.trim(),
      subtitle: form.heroSubtitle.value.trim(),
      primaryButtonText: form.heroPrimaryBtn.value.trim(),
      secondaryButtonText: form.heroSecondaryBtn.value.trim(),
      tags: parseLines(form.heroTags.value),
    },
    hardSkills: {
      eyebrow: form.hardEyebrow.value.trim(),
      title: form.hardTitle.value.trim(),
      items: hardItems,
    },
    softSkills: {
      eyebrow: form.softEyebrow.value.trim(),
      title: form.softTitle.value.trim(),
      items: parseLines(form.softItems.value),
    },
    contact: {
      eyebrow: form.contactEyebrow.value.trim(),
      title: form.contactTitle.value.trim(),
      buttonText: form.contactBtnText.value.trim(),
      buttonUrl: form.contactBtnUrl.value.trim(),
    },
    footer: {
      copyName: form.footerName.value.trim(),
    },
  };
}

function setStatus(message, isError = false) {
  const statusNode = document.getElementById("admin-status");

  if (!statusNode) {
    return;
  }

  statusNode.textContent = message;
  statusNode.dataset.type = isError ? "error" : "ok";
}

function initAdminPanel() {
  renderAdmin();

  const form = document.getElementById("admin-form");
  const resetButton = document.getElementById("reset-btn");

  if (!form || !resetButton) {
    return;
  }

  fillForm(form, getSiteContent());

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const payload = buildContentFromForm(form);

    if (!payload.hardSkills.items.length) {
      setStatus("Добавьте хотя бы одну карточку в Hard Skills (формат: Заголовок | Описание).", true);
      return;
    }

    saveSiteContent(payload);
    setStatus("Изменения сохранены. Обновите главную страницу, чтобы увидеть результат.");
  });

  resetButton.addEventListener("click", () => {
    resetSiteContent();
    fillForm(form, defaultSiteContent);
    setStatus("Контент сброшен к дефолтному состоянию.");
  });
}

initAdminPanel();