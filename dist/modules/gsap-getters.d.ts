declare const ALL_GSAP_PLUGIN_NAMES: readonly ["Draggable", "DrawSVG", "Easel", "Flip", "GSDevTools", "Inertia", "MotionPathHelper", "MotionPath", "MorphSVG", "Observer", "Physics2D", "PhysicsProps", "Pixi", "ScrambleText", "ScrollTrigger", "ScrollSmoother", "ScrollTo", "SplitText", "Text"];
type GSAPPluginNames = (typeof ALL_GSAP_PLUGIN_NAMES)[number];
type GSAPType = typeof gsap;
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
type GSAPReturnTuple<T extends GSAPPluginNames[]> = [
    GSAPType | null,
    ...{
        [K in keyof T]: T[K] extends keyof GSAPPluginTypeMap ? GSAPPluginTypeMap[T[K]] | null : never;
    }
];
declare const getGsap: <T extends GSAPPluginNames[]>(plugins?: [...T]) => GSAPReturnTuple<T>;

export { getGsap };
