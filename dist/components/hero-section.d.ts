import type { Components, JSX } from "../types/components";

interface HeroSection extends Components.HeroSection, HTMLElement {}
export const HeroSection: {
  prototype: HeroSection;
  new (): HeroSection;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
