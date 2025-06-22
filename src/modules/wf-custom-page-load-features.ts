type WFCustomPageLoadFeature = {
  name: string;
} & (
  | { async: false; init: () => void; destroy: () => void; reInit: () => void }
  | {
      async: true;
      init: () => Promise<void>;
      destroy: () => Promise<void>;
      reInit: () => Promise<void>;
    }
);

declare global {
  interface Window {
    wfCustomPageLoadFeatures: Array<WFCustomPageLoadFeature>;
  }
}

window.wfCustomPageLoadFeatures ||= [];

export const addWFCustomPageLoadFeature = (feature: WFCustomPageLoadFeature) => {
  window.wfCustomPageLoadFeatures ||= [];
  window.wfCustomPageLoadFeatures.push(feature);
};

export const getWFCustomPageLoadFeatures = () => window.wfCustomPageLoadFeatures;

export const getWFCustomPageLoadFeatureByName = (name: string) =>
  window.wfCustomPageLoadFeatures.find((feature) => feature.name === name) || null;

export type { WFCustomPageLoadFeature };
