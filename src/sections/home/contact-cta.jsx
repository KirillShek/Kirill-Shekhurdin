import escapeHtml from "../../utils/escape-html.js";

export default function ContactCta(content) {
  return `
    <section class="contact section reveal" id="contact">
      <p class="contact__eyebrow">${escapeHtml(content.eyebrow)}</p>
      <h2 class="contact__title">${escapeHtml(content.title)}</h2>
      <a class="btn" href="${escapeHtml(content.buttonUrl)}" target="_blank" rel="noreferrer">${escapeHtml(content.buttonText)}</a>
    </section>
  `;
}