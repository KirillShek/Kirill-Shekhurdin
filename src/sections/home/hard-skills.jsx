const hardSkills = [
  {
    title: 'JavaScript / TypeScript',
    text: 'Пишу структурируемый код, работаю с модульной архитектурой и уделяю внимание читабельности.',
  },
  {
    title: 'HTML5 + SCSS',
    text: 'Верстаю адаптивные интерфейсы, использую BEM-подход, переменные, миксины и понятную структуру слоев.',
  },
  {
    title: 'Vite + Build Pipeline',
    text: 'Настраиваю быструю сборку, оптимизацию ассетов и удобный DX для развития проекта без лишнего шума.',
  },
  {
    title: 'Git / CI Mindset',
    text: 'Дроблю изменения на логичные коммиты, поддерживаю понятную историю и контролируемый релизный процесс.',
  },
];

export default function HardSkills() {
  const cards = hardSkills
    .map(
      (skill) => `
        <article class="skill-card reveal">
          <h3 class="skill-card__title">${skill.title}</h3>
          <p class="skill-card__text">${skill.text}</p>
        </article>
      `,
    )
    .join('');

  return `
    <section class="skills section" id="hard-skills">
      <div class="section__head reveal">
        <p class="section__eyebrow">Технологическая база</p>
        <h2 class="section__title">Hard Skills</h2>
      </div>
      <div class="skills__grid">${cards}</div>
    </section>
  `;
}
