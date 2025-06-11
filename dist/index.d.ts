import { GSAPPluginNames, GSAPType, GSAPPluginTypeMap } from './types/gsap.js';
import { Properties } from 'csstype';
import 'gsap';
import 'gsap/Draggable';
import 'gsap/DrawSVGPlugin';
import 'gsap/EaselPlugin';
import 'gsap/Flip';
import 'gsap/GSDevTools';
import 'gsap/InertiaPlugin';
import 'gsap/MorphSVGPlugin';
import 'gsap/MotionPathHelper';
import 'gsap/MotionPathPlugin';
import 'gsap/Observer';
import 'gsap/Physics2DPlugin';
import 'gsap/PhysicsPropsPlugin';
import 'gsap/PixiPlugin';
import 'gsap/ScrambleTextPlugin';
import 'gsap/ScrollSmoother';
import 'gsap/ScrollToPlugin';
import 'gsap/ScrollTrigger';
import 'gsap/SplitText';
import 'gsap/TextPlugin';

declare const afterWebflowReady: (callback: (value?: unknown) => unknown) => void;

/**
 * Retrieves the script element that loaded the current module.
 *
 * This function uses import.meta.url to identify the current module's URL,
 * then finds the corresponding script element in the DOM that has this URL
 * as its src attribute.
 *
 * @returns The HTMLScriptElement for the current module, or null if not found
 *
 * @example
 * // Get the script element that loaded this module
 * const scriptElement = getActiveScript();
 * console.log(scriptElement);
 * // Output: <script src="path/to/current/module.js"></script>
 */
declare const getActiveScript: () => HTMLScriptElement | null;

type GSAPReturnTuple<T extends GSAPPluginNames[]> = [
    GSAPType | null,
    ...{
        [K in keyof T]: T[K] extends keyof GSAPPluginTypeMap ? GSAPPluginTypeMap[T[K]] | null : never;
    }
];
/**
 * Retrieves the GSAP core instance and any requested GSAP plugins from the global scope.
 *
 * @template T - A tuple of plugin name literals (`GSAPPluginNames`) to load.
 * @param {T} [plugins=[]] - An array of plugin names to retrieve (e.g. `["ScrollTrigger","SplitText"]`).
 *                           The returned tuple will include one slot per plugin, in the same order.
 * @param {"debug" | "error"} [log] - Optional logging level:
 *    - `"debug"` uses `console.debug`
 *    - `"error"` uses `console.error`
 *    - `undefined` suppresses logs.
 * @returns {GSAPReturnTuple<T>} A tuple where
 *    - index `0` is the GSAP core instance or `null` if not found,
 *    - indices `1…` correspond to each requested plugin instance or `null`.
 *
 * @example
 * // 1. Only GSAP core:
 * const [gsap] = getGsap();
 * if (gsap) {
 *   gsap.to(".box", { x: 100, duration: 1 });
 * }
 *
 * @example
 * // 2. GSAP + ScrollTrigger & SplitText:
 * const [gsapCore, ScrollTrigger, SplitText] = getGsap(
 *   ["ScrollTrigger", "SplitText"]
 * );
 * if (gsapCore && ScrollTrigger && SplitText) {
 *   gsapCore.registerPlugin(ScrollTrigger, SplitText);
 *   // Use ScrollTrigger to create a scroll-based animation
 *   ScrollTrigger.create({
 *     trigger: ".panel",
 *     start: "top center",
 *     end: "bottom center",
 *     scrub: true,
 *     onEnter: () => console.log("panel entered"),
 *   });
 *   // Use SplitText to split and animate text
 *   const split = new SplitText(".heading", { type: "chars,words" });
 *   gsapCore.from(split.chars, {
 *     opacity: 0,
 *     y: 20,
 *     stagger: 0.05,
 *     duration: 0.5,
 *   });
 * }
 */
declare const getGsap: <T extends GSAPPluginNames[]>(plugins?: [...T], log?: "debug" | "error") => GSAPReturnTuple<T>;

/**
 * Configuration options for HTML element selection utilities.
 */
type GetHtmlElementProps = {
    /** CSS selector string to target the desired element(s) */
    selector: string;
    /** Optional parent element to scope the search within. Defaults to document if not provided */
    parent?: HTMLElement;
    /** Logging level for when elements are not found. Set to false to disable logging */
    log?: "debug" | "error" | false;
};
/**
 * Safely retrieves a single HTML element using a CSS selector with optional logging.
 *
 * @template TElement - The specific HTML element type to return (extends HTMLElement)
 * @param options - Configuration object for element selection
 * @param options.selector - CSS selector string to target the desired element
 * @param options.parent - Optional parent element to scope the search within
 * @param options.log - Logging level when element is not found ("debug", "error", or false)
 * @returns The found HTML element cast to the specified type, or null if not found
 *
 * @example
 * ```typescript
 * // Get a button element with error logging
 * const button = getHtmlElement<HTMLButtonElement>({
 *   selector: '.submit-btn',
 *   log: 'error'
 * });
 *
 * // Get an element within a specific parent with debug logging
 * const input = getHtmlElement<HTMLInputElement>({
 *   selector: 'input[type="email"]',
 *   parent: formElement,
 *   log: 'debug'
 * });
 *
 * // Silent mode - no logging
 * const element = getHtmlElement({
 *   selector: '.optional-element',
 *   log: false
 * });
 * ```
 */
declare const getHtmlElement: <TElement extends HTMLElement = HTMLElement>({ selector, parent, log, }: GetHtmlElementProps) => TElement | null;
/**
 * Safely retrieves multiple HTML elements using a CSS selector with optional logging.
 *
 * @template TElement - The specific HTML element type for array items (extends HTMLElement)
 * @param options - Configuration object for element selection
 * @param options.selector - CSS selector string to target the desired elements
 * @param options.parent - Optional parent element to scope the search within
 * @param options.log - Logging level when no elements are found ("debug", "error", or false)
 * @returns Array of found HTML elements cast to the specified type, or null if none found
 *
 * @example
 * ```typescript
 * // Get all list items with debug logging
 * const listItems = getMultipleHtmlElements<HTMLLIElement>({
 *   selector: 'li.item',
 *   log: 'debug'
 * });
 *
 * // Get all inputs within a form with error logging
 * const inputs = getMultipleHtmlElements<HTMLInputElement>({
 *   selector: 'input',
 *   parent: formElement,
 *   log: 'error'
 * });
 *
 * // Silent mode - no logging when elements not found
 * const buttons = getMultipleHtmlElements<HTMLButtonElement>({
 *   selector: '.action-btn',
 *   log: false
 * });
 * ```
 */
declare const getMultipleHtmlElements: <TElement extends HTMLElement = HTMLElement>({ selector, parent, log, }: GetHtmlElementProps) => TElement[] | null;

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

export { afterWebflowReady, getActiveScript, getGsap, getHtmlElement, getMultipleHtmlElements, setStyle };
