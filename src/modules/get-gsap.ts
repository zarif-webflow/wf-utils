/* eslint-disable @typescript-eslint/no-explicit-any */

import type { GSAPPluginNames, GSAPPluginTypeMap, GSAPType } from "@/types/gsap";

import { getActiveScript } from "./get-active-script";
// A helper type to create a tuple type from an array of plugin names
type GSAPReturnTuple<T extends GSAPPluginNames[]> = [
  GSAPType | null,
  ...{
    [K in keyof T]: T[K] extends keyof GSAPPluginTypeMap ? GSAPPluginTypeMap[T[K]] | null : never;
  },
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
export const getGsap = <T extends GSAPPluginNames[]>(
  plugins: [...T] = [] as unknown as [...T],
  log?: "debug" | "error"
): GSAPReturnTuple<T> => {
  let gsapInstance: GSAPType | null = null;
  const logFunc = log === "debug" ? console.debug : log === "error" ? console.error : null;

  try {
    gsapInstance = gsap;
  } catch {
    logFunc?.(
      "GSAP script needs to be imported before this script:",
      getActiveScript(),
      "\n",
      "Get GSAP from here: https://gsap.com/docs/v3/Installation/ "
    );
  }

  const result = [gsapInstance] as unknown as GSAPReturnTuple<T>;

  for (let i = 0; i < plugins.length; i++) {
    const plugin = plugins[i];
    let pluginInstance = null;

    try {
      // Try to access the plugin from the global namespace
      // @ts-expect-error global window access
      pluginInstance = window[plugin] || null;

      if (pluginInstance === null) {
        throw new Error();
      }
    } catch {
      logFunc?.(
        `${plugin} plugin script needs to be imported before this script.`,
        getActiveScript(),
        "\n",
        `Get ${plugin} plugin from here: https://gsap.com/docs/v3/Installation/ `
      );
    }
    // Use index-based assignment to maintain tuple structure
    result[i + 1] = pluginInstance as any;
  }

  return result;
};
