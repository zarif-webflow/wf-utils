/**
 * Retrieves the script element that loaded the current module.
 *
 * This function uses import.meta.url to identify the current module's URL,
 * then finds the corresponding script element in the DOM that has this URL
 * as its src attribute.
 *
 * @returns The HTMLScriptElement for the current module, or null if not found
 *
 * @example
 * // Get the script element that loaded this module
 * const scriptElement = getActiveScript();
 * console.log(scriptElement);
 * // Output: <script src="path/to/current/module.js"></script>
 */
declare const getActiveScript: () => HTMLScriptElement | null;

export { getActiveScript };
