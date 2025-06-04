import { GSAPPluginNames, GSAPType, GSAPPluginTypeMap } from '../types/gsap.d.js';
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
declare const getGsap: <T extends GSAPPluginNames[]>(plugins?: [...T], log?: "debug" | "error") => GSAPReturnTuple<T>;

export { getGsap };
