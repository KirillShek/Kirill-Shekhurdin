import Header from "./components/common/header.jsx";
import Footer from "./components/common/footer.jsx";
import Hero from "./sections/home/hero.jsx";
import HardSkills from "./sections/home/hard-skills.jsx";
import SoftSkills from "./sections/home/soft-skills.jsx";
import ContactCta from "./sections/home/contact-cta.jsx";

export default function App() {
  return `
    ${Header()}
    <main class="page">
      <div class="container page__inner">
        ${Hero()}
        ${HardSkills()}
        ${SoftSkills()}
        ${ContactCta()}
      </div>
    </main>
    ${Footer()}
  `;
}
