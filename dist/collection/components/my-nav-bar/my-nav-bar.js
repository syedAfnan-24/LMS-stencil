import { h } from "@stencil/core";
export class MyNavBar {
  constructor() {
    this.firstOption = undefined;
    this.firstHref = undefined;
    this.secondOption = undefined;
    this.secondHref = undefined;
    this.toggleBool = false;
  }
  render() {
    //three bars toggle button
    let mobileToggle = (h("div", { class: "menu-toggle", onClick: () => { this.toggleBool = true; } }, h("span", { class: "bar" }), h("span", { class: "bar" }), h("span", { class: "bar" })));
    //dropdown
    let dropdownMenu;
    if (this.toggleBool) {
      dropdownMenu = (h("div", { class: "dropdown-menu" }, h("div", { class: "menu-toggle", onClick: () => { this.toggleBool = false; } }, h("p", { id: "cross" }, "X"), h("br", null), h("a", { id: "nav-link-dropdown", href: this.firstHref }, this.firstOption), h("a", { id: "nav-link-dropdown", href: this.secondHref }, this.secondOption))));
    }
    //Main Navigation Bar
    let navBar = (h("nav", { class: "navbar" }, h("div", { class: "logo" }, "Library"), mobileToggle, h("div", { class: "menu" }, h("a", { id: "nav-link", href: this.firstHref }, this.firstOption), h("a", { id: "nav-link", href: this.secondHref }, this.secondOption)), dropdownMenu));
    return navBar;
  }
  static get is() { return "my-nav"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["my-nav-bar.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["my-nav-bar.css"]
    };
  }
  static get properties() {
    return {
      "firstOption": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "first-option",
        "reflect": false
      },
      "firstHref": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "first-href",
        "reflect": false
      },
      "secondOption": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "second-option",
        "reflect": false
      },
      "secondHref": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "second-href",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "toggleBool": {}
    };
  }
}
//# sourceMappingURL=my-nav-bar.js.map
