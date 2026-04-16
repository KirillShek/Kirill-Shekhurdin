export default function Hero() {
  return `
    <section class="hero reveal" id="hero">
      <p class="hero__eyebrow">Frontend Developer</p>
      <h1 class="hero__title">Kirill Shekhurdin</h1>
      <p class="hero__subtitle">
        Создаю быстрые и визуально цельные веб-интерфейсы: от идеи и прототипа до продакшн-версии на современном стеке.
      </p>

      <div class="hero__actions">
        <a class="btn" href="#hard-skills">Смотреть стек</a>
        <a class="btn btn--ghost" href="#contact">Обсудить проект</a>
      </div>

      <ul class="hero__meta" aria-label="Ключевые направления">
        <li>Vite</li>
        <li>JSX</li>
        <li>HTML5</li>
        <li>BEM</li>
        <li>JS</li>
        <li>SCSS</li>
        <li>Figma</li>
        <li>CMS</li>
        <li>Git Workflow</li>
      </ul>
    </section>
  `;
}
