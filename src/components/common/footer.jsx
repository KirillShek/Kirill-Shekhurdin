import escapeHtml from "../../utils/escape-html.js";

export default function Footer(content) {
  const year = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="container site-footer__inner">
        <p class="site-footer__copy">© ${year} ${escapeHtml(content.copyName)}</p>
        <a class="site-footer__top" href="#">Наверх</a>
      </div>
    </footer>
  `;
}