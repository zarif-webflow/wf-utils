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

type WFCustomPageLoadFeaturesRecord = Record<string, WFCustomPageLoadFeature>;

declare global {
  interface Window {
    wfCustomPageLoadFeatures: WFCustomPageLoadFeaturesRecord;
  }
}

window.wfCustomPageLoadFeatures ||= {} as WFCustomPageLoadFeaturesRecord;

export const addWFCustomPageLoadFeature = (feature: WFCustomPageLoadFeature) => {
  window.wfCustomPageLoadFeatures ||= {} as WFCustomPageLoadFeaturesRecord;
  window.wfCustomPageLoadFeatures[feature.name] = feature;
};

export const getWFCustomPageLoadFeatures = () => window.wfCustomPageLoadFeatures;

export type { WFCustomPageLoadFeature };
