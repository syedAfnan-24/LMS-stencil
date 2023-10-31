import type { Components, JSX } from "../types/components";

interface MyNav extends Components.MyNav, HTMLElement {}
export const MyNav: {
  prototype: MyNav;
  new (): MyNav;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
