const softSkills = [
  'Системное мышление и декомпозиция задач',
  'Коммуникация с командой и прозрачная отчётность',
  'Ответственность за качество и сроки',
  'Быстрая адаптация под требования продукта',
  'Внимание к UX-деталям и доступности',
  'Проактивность в улучшении процессов',
];

export default function SoftSkills() {
  const items = softSkills
    .map((skill) => `<li class="soft-skills__item reveal">${skill}</li>`)
    .join('');

  return `
    <section class="soft-skills section" id="soft-skills">
      <div class="section__head reveal">
        <p class="section__eyebrow">Подход к работе</p>
        <h2 class="section__title">Soft Skills</h2>
      </div>
      <ul class="soft-skills__list">
        ${items}
      </ul>
    </section>
  `;
}
