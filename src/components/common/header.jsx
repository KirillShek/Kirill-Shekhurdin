export default function Header() {
  return `
    <header class="site-header" id="top">
      <div class="container site-header__inner">
        <a class="site-header__logo" href="#top" aria-label="Kirill Shekhurdin home">KS</a>

        <div class="site-header__center">
          <nav class="site-header__nav" aria-label="Main navigation">
            <a href="#hero" class="site-header__link">Главная</a>
            <a href="#hard-skills" class="site-header__link">Hard Skills</a>
            <a href="#soft-skills" class="site-header__link">Soft Skills</a>
            <a href="#contact" class="site-header__link">Контакты</a>
          </nav>

          <button class="theme-toggle" type="button" data-theme-toggle aria-label="Switch theme">
            <span class="theme-toggle__icon" aria-hidden="true"></span>
          </button>
        </div>

        <a class="btn btn--small" href="#contact">Связаться</a>
      </div>
    </header>
  `;
}
