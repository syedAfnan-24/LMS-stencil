import type { Components, JSX } from "../types/components";

interface FooterSection extends Components.FooterSection, HTMLElement {}
export const FooterSection: {
  prototype: FooterSection;
  new (): FooterSection;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
