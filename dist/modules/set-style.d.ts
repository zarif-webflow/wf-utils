import { Properties } from 'csstype';

declare const setStyle: <TElement extends HTMLElement = HTMLElement>(element: TElement, styles: Properties) => {
    revert: () => void;
};

export { setStyle };
