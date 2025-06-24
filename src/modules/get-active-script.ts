import { getHtmlElement } from "./get-html-element";

/**
 * Gets the currently executing script element from the DOM.
 *
 * This function finds the script element that corresponds to the current module
 * by matching the script's src attribute with the provided import.meta.url.
 *
 * @param importMetaUrl - The URL of the current module, typically from import.meta.url
 * @returns The HTMLScriptElement that is currently executing this code, or null if not found
 *
 * @example
 * ```typescript
 * // Get the current script element
 * const currentScript = getActiveScript(import.meta.url);
 * if (currentScript) {
 *   console.log('Script loaded from:', currentScript.src);
 * }
 * ```
 *
 * @remarks
 * This is useful when you need to access attributes or properties of the script tag
 * that loaded your module, such as data attributes or the script's position in the DOM.
 */
export const getActiveScript = (importMetaUrl: string) => {
  const currentModuleUrl = importMetaUrl;
  return getHtmlElement<HTMLScriptElement>({
    selector: `script[src="${currentModuleUrl}"]`,
  });
};
