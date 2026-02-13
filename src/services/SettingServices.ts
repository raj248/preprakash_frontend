// services/SettingServices.ts
import requests from "./httpServices";
import type { Setting, StoreCustomizationSetting } from "../types/settings";

const SettingServices = {
  // store setting
  getStoreSetting: async (): Promise<Setting> => {
    return requests.get<Setting>("/setting/store-setting");
  },

  getStoreSeoSetting: async (): Promise<Setting> => {
    return requests.get<Setting>("/setting/store-setting/seo");
  },

  // customization
  getStoreCustomizationSetting:
    async (): Promise<StoreCustomizationSetting> => {
      return requests.get<StoreCustomizationSetting>(
        "/setting/store/customization",
      );
    },

  getShowingLanguage: async (): Promise<Setting[]> => {
    return requests.get<Setting[]>("/language/show");
  },

  getGlobalSetting: async (): Promise<Setting> => {
    return requests.get<Setting>("/setting/global");
  },
};

export default SettingServices;
