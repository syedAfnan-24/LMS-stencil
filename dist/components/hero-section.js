import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const heroSectionCss = ":host{display:block}.hero{background-image:url('../assets/hero.jpg');background-size:cover;background-position:center;background-attachment:fixed;height:100vh;color:#fff;text-align:center;display:flex;justify-content:center;align-items:center}.hero-content{max-width:800px;padding:20px}.hero h1{font-size:36px;margin-bottom:20px;color:white;text-shadow:2px 2px rgba(0, 0, 0, 0.532)}.hero p{font-size:24px;margin-bottom:30px;color:white;text-shadow:2px 2px rgba(0, 0, 0, 0.516)}";

const HeroSection$1 = /*@__PURE__*/ proxyCustomElement(class HeroSection extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("header", { class: "hero" }, h("div", { class: "hero-content", "data-aos": "fade-up", "data-aos-duration": "5000" }, h("h1", null, "Library Management System"), h("p", null, "Find the books you need"))));
  }
  static get style() { return heroSectionCss; }
}, [1, "hero-section"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["hero-section"];
  components.forEach(tagName => { switch (tagName) {
    case "hero-section":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, HeroSection$1);
      }
      break;
  } });
}

const HeroSection = HeroSection$1;
const defineCustomElement = defineCustomElement$1;

export { HeroSection, defineCustomElement };

//# sourceMappingURL=hero-section.js.map