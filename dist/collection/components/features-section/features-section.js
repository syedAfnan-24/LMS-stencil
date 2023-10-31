import { h } from "@stencil/core";
export class FeaturesSection {
  render() {
    return (h("div", null, h("div", { class: "features-container", id: "tab" }, h("div", { class: "feature-item", "data-aos": "fade-up", "data-aos-duration": "5000" }, h("div", { class: "feature-icon" }, "\uD83D\uDCDA"), h("div", { class: "feature-title" }, "Vast Collection of Books"), h("div", { class: "feature-description" }, "Explore our extensive collection of books, ranging from classics to contemporary bestsellers.")), h("div", { class: "feature-item", "data-aos": "fade-up", "data-aos-duration": "5000" }, h("div", { class: "feature-icon" }, "\uD83D\uDCD6"), h("div", { class: "feature-title" }, "Digital Magazines"), h("div", { class: "feature-description" }, "Enjoy popular magazines in digital format, covering various topics and interests.")), h("div", { class: "feature-item", "data-aos": "fade-up", "data-aos-duration": "5000" }, h("div", { class: "feature-icon" }, "\uD83C\uDFA8"), h("div", { class: "feature-title" }, "Events and Workshops"), h("div", { class: "feature-description" }, "Participate in book readings, author signings, and educational workshops held at the library.")))));
  }
  static get is() { return "features-section"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["features-section.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["features-section.css"]
    };
  }
}
//# sourceMappingURL=features-section.js.map
