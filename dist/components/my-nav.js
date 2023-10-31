import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const myNavBarCss = "*{font-family:sans-serif}.navbar{background-color:#333;color:#fff;display:flex;justify-content:space-between;align-items:center;padding:10px 20px;box-shadow:0px 2px 5px rgba(0, 0, 0, 0.1)}#nav-link{color:#fff;text-decoration:none;margin:0 15px;font-weight:bold;transition:all 0.3s ease}#nav-link:hover{color:#02c912}.logo{font-size:1.5rem;font-weight:bold}.menu-toggle{display:none;flex-direction:column;cursor:pointer}.dropdown-menu{position:fixed;top:60;margin-top:100px;right:0;z-index:9999;background-color:#1c1c1cb3;padding:10px;box-shadow:0 0 10px rgba(0, 0, 0, 0.733);display:none}#nav-link-dropdown{text-decoration:none;color:white;margin:15px;font-weight:bold;transition:all 0.3s ease}#nav-link-dropdown:hover{color:#02c912}.bar{background-color:#fff;height:3px;width:25px;margin:3px 0}#cross{font-size:26px;font-weight:700;color:rgb(217, 217, 217);position:absolute;top:0;right:0;margin:0 10px 5px}@media (max-width: 768px){.menu{display:none}.menu-toggle{display:flex;color:white}.dropdown-menu{display:block}}";

const MyNavBar = /*@__PURE__*/ proxyCustomElement(class MyNavBar extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  static get style() { return myNavBarCss; }
}, [1, "my-nav", {
    "firstOption": [1, "first-option"],
    "firstHref": [1, "first-href"],
    "secondOption": [1, "second-option"],
    "secondHref": [1, "second-href"],
    "toggleBool": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-nav"];
  components.forEach(tagName => { switch (tagName) {
    case "my-nav":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyNavBar);
      }
      break;
  } });
}

const MyNav = MyNavBar;
const defineCustomElement = defineCustomElement$1;

export { MyNav, defineCustomElement };

//# sourceMappingURL=my-nav.js.map