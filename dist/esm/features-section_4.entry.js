import { r as registerInstance, h } from './index-fbfe2e9d.js';

const featuresSectionCss = ":host{display:block}*{font-family:sans-serif}.features-container{display:flex;flex-wrap:wrap;justify-content:space-around;padding:50px 0;background-color:#373737}.feature-item{text-align:center;max-width:300px;margin:20px;padding:20px;background-color:#515151;border-radius:5px;box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.1);transition:all 0.3s ease}.feature-item:hover{box-shadow:0px 0px 20px 0px #01cd427f}.feature-icon{font-size:36px;margin-bottom:20px;color:#3498db}.feature-title{font-size:24px;margin-bottom:10px;color:#f7f7f7}.feature-description{font-size:16px;color:#c5c5c5}@media (max-width: 768px){.feature-item{max-width:100%}}";

const FeaturesSection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("div", { class: "features-container", id: "tab" }, h("div", { class: "feature-item", "data-aos": "fade-up", "data-aos-duration": "5000" }, h("div", { class: "feature-icon" }, "\uD83D\uDCDA"), h("div", { class: "feature-title" }, "Vast Collection of Books"), h("div", { class: "feature-description" }, "Explore our extensive collection of books, ranging from classics to contemporary bestsellers.")), h("div", { class: "feature-item", "data-aos": "fade-up", "data-aos-duration": "5000" }, h("div", { class: "feature-icon" }, "\uD83D\uDCD6"), h("div", { class: "feature-title" }, "Digital Magazines"), h("div", { class: "feature-description" }, "Enjoy popular magazines in digital format, covering various topics and interests.")), h("div", { class: "feature-item", "data-aos": "fade-up", "data-aos-duration": "5000" }, h("div", { class: "feature-icon" }, "\uD83C\uDFA8"), h("div", { class: "feature-title" }, "Events and Workshops"), h("div", { class: "feature-description" }, "Participate in book readings, author signings, and educational workshops held at the library.")))));
  }
};
FeaturesSection.style = featuresSectionCss;

const footerSectionCss = ":host{display:block}div{background-color:rgb(184, 183, 183);color:rgb(46, 45, 45);padding:20px;text-align:center;font-family:sans-serif}#copy-rights{font-size:20px}#sub-para{font-size:12px}a{text-decoration:none;color:rgb(2, 152, 2);transition:all 0.3s ease}a:hover{color:rgb(5, 179, 5);text-shadow:1px 1px rgba(0, 128, 0, 0.199)}";

const FooterSection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("p", { id: 'copy-rights' }, "\u00A9 2023 Library. All rights reserved."), h("p", { id: 'sub-para' }, "are you the admin? ", h("a", { href: "adminLogin.html" }, "Login here"))));
  }
};
FooterSection.style = footerSectionCss;

const heroSectionCss = ":host{display:block}.hero{background-image:url('../assets/hero.jpg');background-size:cover;background-position:center;background-attachment:fixed;height:100vh;color:#fff;text-align:center;display:flex;justify-content:center;align-items:center}.hero-content{max-width:800px;padding:20px}.hero h1{font-size:36px;margin-bottom:20px;color:white;text-shadow:2px 2px rgba(0, 0, 0, 0.532)}.hero p{font-size:24px;margin-bottom:30px;color:white;text-shadow:2px 2px rgba(0, 0, 0, 0.516)}";

const HeroSection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("header", { class: "hero" }, h("div", { class: "hero-content", "data-aos": "fade-up", "data-aos-duration": "5000" }, h("h1", null, "Library Management System"), h("p", null, "Find the books you need"))));
  }
};
HeroSection.style = heroSectionCss;

const myNavBarCss = "*{font-family:sans-serif}.navbar{background-color:#333;color:#fff;display:flex;justify-content:space-between;align-items:center;padding:10px 20px;box-shadow:0px 2px 5px rgba(0, 0, 0, 0.1)}#nav-link{color:#fff;text-decoration:none;margin:0 15px;font-weight:bold;transition:all 0.3s ease}#nav-link:hover{color:#02c912}.logo{font-size:1.5rem;font-weight:bold}.menu-toggle{display:none;flex-direction:column;cursor:pointer}.dropdown-menu{position:fixed;top:60;margin-top:100px;right:0;z-index:9999;background-color:#1c1c1cb3;padding:10px;box-shadow:0 0 10px rgba(0, 0, 0, 0.733);display:none}#nav-link-dropdown{text-decoration:none;color:white;margin:15px;font-weight:bold;transition:all 0.3s ease}#nav-link-dropdown:hover{color:#02c912}.bar{background-color:#fff;height:3px;width:25px;margin:3px 0}#cross{font-size:26px;font-weight:700;color:rgb(217, 217, 217);position:absolute;top:0;right:0;margin:0 10px 5px}@media (max-width: 768px){.menu{display:none}.menu-toggle{display:flex;color:white}.dropdown-menu{display:block}}";

const MyNavBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
MyNavBar.style = myNavBarCss;

export { FeaturesSection as features_section, FooterSection as footer_section, HeroSection as hero_section, MyNavBar as my_nav };

//# sourceMappingURL=features-section_4.entry.js.map