import { h } from "@stencil/core";
export class HeroSection {
  render() {
    return (h("header", { class: "hero" }, h("div", { class: "hero-content", "data-aos": "fade-up", "data-aos-duration": "5000" }, h("h1", null, "Library Management System"), h("p", null, "Find the books you need"))));
  }
  static get is() { return "hero-section"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["hero-section.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["hero-section.css"]
    };
  }
}
//# sourceMappingURL=hero-section.js.map
