import escapeHtml from "../../utils/escape-html.js";

export default function Hero(content) {
  const tags = content.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("");

  return `
    <section class="hero reveal" id="hero">
      <p class="hero__eyebrow">${escapeHtml(content.eyebrow)}</p>
      <h1 class="hero__title">${escapeHtml(content.title)}</h1>
      <p class="hero__subtitle">
        ${escapeHtml(content.subtitle)}
      </p>

      <div class="hero__actions">
        <a class="btn" href="#hard-skills">${escapeHtml(content.primaryButtonText)}</a>
        <a class="btn btn--ghost" href="#contact">${escapeHtml(content.secondaryButtonText)}</a>
      </div>

      <ul class="hero__meta" aria-label="Ключевые направления">
        ${tags}
      </ul>
    </section>
  `;
}