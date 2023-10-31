import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const featuresSectionCss = ":host{display:block}*{font-family:sans-serif}.features-container{display:flex;flex-wrap:wrap;justify-content:space-around;padding:50px 0;background-color:#373737}.feature-item{text-align:center;max-width:300px;margin:20px;padding:20px;background-color:#515151;border-radius:5px;box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.1);transition:all 0.3s ease}.feature-item:hover{box-shadow:0px 0px 20px 0px #01cd427f}.feature-icon{font-size:36px;margin-bottom:20px;color:#3498db}.feature-title{font-size:24px;margin-bottom:10px;color:#f7f7f7}.feature-description{font-size:16px;color:#c5c5c5}@media (max-width: 768px){.feature-item{max-width:100%}}";

const FeaturesSection$1 = /*@__PURE__*/ proxyCustomElement(class FeaturesSection extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", null, h("div", { class: "features-container", id: "tab" }, h("div", { class: "feature-item", "data-aos": "fade-up", "data-aos-duration": "5000" }, h("div", { class: "feature-icon" }, "\uD83D\uDCDA"), h("div", { class: "feature-title" }, "Vast Collection of Books"), h("div", { class: "feature-description" }, "Explore our extensive collection of books, ranging from classics to contemporary bestsellers.")), h("div", { class: "feature-item", "data-aos": "fade-up", "data-aos-duration": "5000" }, h("div", { class: "feature-icon" }, "\uD83D\uDCD6"), h("div", { class: "feature-title" }, "Digital Magazines"), h("div", { class: "feature-description" }, "Enjoy popular magazines in digital format, covering various topics and interests.")), h("div", { class: "feature-item", "data-aos": "fade-up", "data-aos-duration": "5000" }, h("div", { class: "feature-icon" }, "\uD83C\uDFA8"), h("div", { class: "feature-title" }, "Events and Workshops"), h("div", { class: "feature-description" }, "Participate in book readings, author signings, and educational workshops held at the library.")))));
  }
  static get style() { return featuresSectionCss; }
}, [1, "features-section"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["features-section"];
  components.forEach(tagName => { switch (tagName) {
    case "features-section":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FeaturesSection$1);
      }
      break;
  } });
}

const FeaturesSection = FeaturesSection$1;
const defineCustomElement = defineCustomElement$1;

export { FeaturesSection, defineCustomElement };

//# sourceMappingURL=features-section.js.map