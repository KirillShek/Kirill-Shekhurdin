import escapeHtml from "../../utils/escape-html.js";

export default function SoftSkills(content) {
  const items = content.items
    .map((skill) => `<li class="soft-skills__item reveal">${escapeHtml(skill)}</li>`)
    .join("");

  return `
    <section class="soft-skills section" id="soft-skills">
      <div class="section__head reveal">
        <p class="section__eyebrow">${escapeHtml(content.eyebrow)}</p>
        <h2 class="section__title">${escapeHtml(content.title)}</h2>
      </div>
      <ul class="soft-skills__list">
        ${items}
      </ul>
    </section>
  `;
}