export default function Footer() {
  const year = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="container site-footer__inner">
        <p class="site-footer__copy">© ${year} Kirill Shekhurdin</p>
        <a class="site-footer__top" href="#">Наверх</a>
      </div>
    </footer>
  `;
}
