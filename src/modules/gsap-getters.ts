/* eslint-disable @typescript-eslint/no-explicit-any */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ALL_GSAP_PLUGIN_NAMES = [
  "Draggable",
  "DrawSVG",
  "Easel",
  "Flip",
  "GSDevTools",
  "Inertia",
  "MotionPathHelper",
  "MotionPath",
  "MorphSVG",
  "Observer",
  "Physics2D",
  "PhysicsProps",
  "Pixi",
  "ScrambleText",
  "ScrollTrigger",
  "ScrollSmoother",
  "ScrollTo",
  "SplitText",
  "Text",
] as const;

type GSAPPluginNames = (typeof ALL_GSAP_PLUGIN_NAMES)[number];

type GSAPType = typeof gsap;

// Define mappings between plugin names and their types
type GSAPPluginTypeMap = {
  Draggable: typeof Draggable;
  DrawSVG: typeof DrawSVGPlugin;
  Easel: typeof EaselPlugin;
  Flip: typeof Flip;
  GSDevTools: typeof GSDevTools;
  Inertia: typeof InertiaPlugin;
  MotionPathHelper: typeof MotionPathHelper;
  MotionPath: typeof MotionPathPlugin;
  MorphSVG: typeof MorphSVGPlugin;
  Observer: typeof Observer;
  Physics2D: typeof Physics2DPlugin;
  PhysicsProps: typeof PhysicsPropsPlugin;
  Pixi: typeof PixiPlugin;
  ScrambleText: typeof ScrambleTextPlugin;
  ScrollTrigger: typeof ScrollTrigger;
  ScrollSmoother: typeof ScrollSmoother;
  ScrollTo: typeof ScrollToPlugin;
  SplitText: typeof SplitText;
  Text: typeof TextPlugin;
};

// A helper type to create a tuple type from an array of plugin names
type GSAPReturnTuple<T extends GSAPPluginNames[]> = [
  GSAPType | null,
  ...{
    [K in keyof T]: T[K] extends keyof GSAPPluginTypeMap ? GSAPPluginTypeMap[T[K]] | null : never;
  },
];

export const getGsap = <T extends GSAPPluginNames[]>(
  plugins: [...T] = [] as unknown as [...T]
): GSAPReturnTuple<T> => {
  let gsapInstance: GSAPType | null = null;

  try {
    gsapInstance = gsap;
  } catch {
    // gsap not available
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
      // Plugin not available
    }
    // Use index-based assignment to maintain tuple structure
    result[i + 1] = pluginInstance as any;
  }

  return result;
};
