import { GSAPPluginNames, GSAPType, GSAPPluginTypeMap } from '../types/gsap.js';
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

export { getGsap };
