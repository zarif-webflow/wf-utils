type GetHtmlElementProps = {
    selector: string;
    parent?: HTMLElement;
    log?: "debug" | "error" | false;
};
declare const getHtmlElement: <TElement extends HTMLElement = HTMLElement>({ selector, parent, log, }: GetHtmlElementProps) => TElement | null;
declare const getMultipleHtmlElements: <TElement extends HTMLElement = HTMLElement>({ selector, parent, log, }: GetHtmlElementProps) => TElement[] | null;

export { getHtmlElement, getMultipleHtmlElements };
