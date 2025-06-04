/* eslint-disable @typescript-eslint/no-explicit-any */

import type { GSAPPluginNames, GSAPPluginTypeMap, GSAPType } from "@/types/gsap";

// A helper type to create a tuple type from an array of plugin names
type GSAPReturnTuple<T extends GSAPPluginNames[]> = [
  GSAPType | null,
  ...{
    [K in keyof T]: T[K] extends keyof GSAPPluginTypeMap ? GSAPPluginTypeMap[T[K]] | null : never;
  },
];

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
      "GSAP script needs to be imported before this script.",
      "\n",
      "Get it from here: https://gsap.com/docs/v3/Installation/ "
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
    } catch {
      logFunc?.(
        `${plugin} plugin script needs to be imported before this script.`,
        "\n",
        "Get it from here: https://gsap.com/docs/v3/Installation/ "
      );
    }
    // Use index-based assignment to maintain tuple structure
    result[i + 1] = pluginInstance as any;
  }

  return result;
};
