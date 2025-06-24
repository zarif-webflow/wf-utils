// src/modules/after-webflow-ready.ts
var afterWebflowReady = (callback) => {
  window.Webflow ||= [];
  window.Webflow.push(callback);
};

// src/modules/get-html-element.ts
var getHtmlElement = ({
  selector,
  parent,
  log = "debug"
}) => {
  const targetElement = (parent || document).querySelector(selector);
  if (targetElement === null) {
    if (log === false) return null;
    const consoleMethod = log === "debug" ? console.debug : console.error;
    consoleMethod(
      `${log.toUpperCase()}: Element with selector "${selector}" not found in ${parent !== void 0 ? "the specified parent element:" : "the document."}`,
      parent
    );
    return null;
  }
  return targetElement;
};
var getMultipleHtmlElements = ({
  selector,
  parent,
  log = "debug"
}) => {
  const targetElements = Array.from((parent || document).querySelectorAll(selector));
  if (targetElements.length === 0) {
    if (log === false) return null;
    const consoleMethod = log === "debug" ? console.debug : console.error;
    consoleMethod(
      `${log.toUpperCase()}: No elements found with selector "${selector}" in ${parent !== void 0 ? "the specified parent element:" : "the document."}`,
      parent
    );
    return null;
  }
  return targetElements;
};

// src/modules/get-active-script.ts
var getActiveScript = (importMetaUrl) => {
  const currentModuleUrl = importMetaUrl;
  return getHtmlElement({
    selector: `script[src="${currentModuleUrl}"]`
  });
};

// src/modules/get-gsap.ts
var getGsap = (plugins = [], log = "error") => {
  let gsapInstance = null;
  const logFunc = log === "debug" ? console.debug : log === "error" ? console.error : null;
  try {
    gsapInstance = gsap;
  } catch {
    logFunc?.(
      "GSAP script needs to be imported before this script.",
      "\n",
      "Get GSAP from here: https://gsap.com/docs/v3/Installation/ "
    );
  }
  const result = [gsapInstance];
  for (let i = 0; i < plugins.length; i++) {
    const plugin = plugins[i];
    let pluginInstance = null;
    try {
      pluginInstance = window[plugin] || null;
      if (!pluginInstance) {
        throw new Error();
      }
    } catch {
      logFunc?.(
        `GSAP ${plugin} plugin script needs to be imported before this script.`,
        "\n",
        `Get the ${plugin} plugin from here: https://gsap.com/docs/v3/Installation/ `
      );
    }
    result[i + 1] = pluginInstance;
  }
  return result;
};

// src/modules/set-style.ts
var setStyle = (element, styles) => {
  const prevValues = {};
  for (const key of Object.keys(styles)) {
    prevValues[key] = element.style[key];
    element.style[key] = styles[key] || "";
  }
  return {
    revert: () => {
      Object.assign(element.style, prevValues);
    }
  };
};

// src/modules/wf-custom-page-load-features.ts
window.wfCustomPageLoadFeatures ||= [];
var addWFCustomPageLoadFeature = (feature) => {
  window.wfCustomPageLoadFeatures ||= [];
  window.wfCustomPageLoadFeatures.push(feature);
};
var getWFCustomPageLoadFeatures = () => window.wfCustomPageLoadFeatures;
var getWFCustomPageLoadFeatureByName = (name) => window.wfCustomPageLoadFeatures.find((feature) => feature.name === name) || null;

export { addWFCustomPageLoadFeature, afterWebflowReady, getActiveScript, getGsap, getHtmlElement, getMultipleHtmlElements, getWFCustomPageLoadFeatureByName, getWFCustomPageLoadFeatures, setStyle };
