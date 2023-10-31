import type { Components, JSX } from "../types/components";

interface FeaturesSection extends Components.FeaturesSection, HTMLElement {}
export const FeaturesSection: {
  prototype: FeaturesSection;
  new (): FeaturesSection;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
