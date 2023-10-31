import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const footerSectionCss = ":host{display:block}div{background-color:rgb(184, 183, 183);color:rgb(46, 45, 45);padding:20px;text-align:center;font-family:sans-serif}#copy-rights{font-size:20px}#sub-para{font-size:12px}a{text-decoration:none;color:rgb(2, 152, 2);transition:all 0.3s ease}a:hover{color:rgb(5, 179, 5);text-shadow:1px 1px rgba(0, 128, 0, 0.199)}";

const FooterSection$1 = /*@__PURE__*/ proxyCustomElement(class FooterSection extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", null, h("p", { id: 'copy-rights' }, "\u00A9 2023 Library. All rights reserved."), h("p", { id: 'sub-para' }, "are you the admin? ", h("a", { href: "adminLogin.html" }, "Login here"))));
  }
  static get style() { return footerSectionCss; }
}, [1, "footer-section"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["footer-section"];
  components.forEach(tagName => { switch (tagName) {
    case "footer-section":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FooterSection$1);
      }
      break;
  } });
}

const FooterSection = FooterSection$1;
const defineCustomElement = defineCustomElement$1;

export { FooterSection, defineCustomElement };

//# sourceMappingURL=footer-section.js.map