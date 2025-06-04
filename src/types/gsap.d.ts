import type { gsap } from "gsap";
import type { Draggable } from "gsap/Draggable";
import type { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import type { EaselPlugin } from "gsap/EaselPlugin";
import type { Flip } from "gsap/Flip";
import type { GSDevTools } from "gsap/GSDevTools";
import type { InertiaPlugin } from "gsap/InertiaPlugin";
import type { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import type { MotionPathHelper } from "gsap/MotionPathHelper";
import type { MotionPathPlugin } from "gsap/MotionPathPlugin";
import type { Observer } from "gsap/Observer";
import type { Physics2DPlugin } from "gsap/Physics2DPlugin";
import type { PhysicsPropsPlugin } from "gsap/PhysicsPropsPlugin";
import type { PixiPlugin } from "gsap/PixiPlugin";
import type { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import type { ScrollSmoother } from "gsap/ScrollSmoother";
import type { ScrollToPlugin } from "gsap/ScrollToPlugin";
import type { ScrollTrigger } from "gsap/ScrollTrigger";
import type { SplitText } from "gsap/SplitText";
import type { TextPlugin } from "gsap/TextPlugin";

export type GSAPPluginNames =
  | "Draggable"
  | "DrawSVG"
  | "Easel"
  | "Flip"
  | "GSDevTools"
  | "Inertia"
  | "MotionPathHelper"
  | "MotionPath"
  | "MorphSVG"
  | "Observer"
  | "Physics2D"
  | "PhysicsProps"
  | "Pixi"
  | "ScrambleText"
  | "ScrollTrigger"
  | "ScrollSmoother"
  | "ScrollTo"
  | "SplitText"
  | "Text";

export type GSAPType = typeof gsap;

// Define mappings between plugin names and their types
export type GSAPPluginTypeMap = {
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
