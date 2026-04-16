import escapeHtml from "../../utils/escape-html.js";

export default function HardSkills(content) {
  const cards = content.items
    .map(
      (skill) => `
        <article class="skill-card reveal">
          <h3 class="skill-card__title">${escapeHtml(skill.title)}</h3>
          <p class="skill-card__text">${escapeHtml(skill.text)}</p>
        </article>
      `,
    )
    .join("");

  return `
    <section class="skills section" id="hard-skills">
      <div class="section__head reveal">
        <p class="section__eyebrow">${escapeHtml(content.eyebrow)}</p>
        <h2 class="section__title">${escapeHtml(content.title)}</h2>
      </div>
      <div class="skills__grid">${cards}</div>
    </section>
  `;
}