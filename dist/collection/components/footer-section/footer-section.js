import { h } from "@stencil/core";
export class FooterSection {
  render() {
    return (h("div", null, h("p", { id: 'copy-rights' }, "\u00A9 2023 Library. All rights reserved."), h("p", { id: 'sub-para' }, "are you the admin? ", h("a", { href: "adminLogin.html" }, "Login here"))));
  }
  static get is() { return "footer-section"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["footer-section.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["footer-section.css"]
    };
  }
}
//# sourceMappingURL=footer-section.js.map
