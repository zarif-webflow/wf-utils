import { Properties } from 'csstype';

/**
 * Sets the styles on an HTML element and returns a function to revert them.
 *
 * @param element - The HTML element to set styles on.
 * @param styles - An object containing CSS properties and values to set.
 * @returns An object with a `revert` method to restore previous styles.
 *
 * @example
 * const revert = setStyle(element, { color: 'red', backgroundColor: 'blue' });
 * // Later, to revert the styles:
 * revert();
 **/
declare const setStyle: <TElement extends HTMLElement = HTMLElement>(element: TElement, styles: Properties) => {
    revert: () => void;
};

export { setStyle };
