// import { useState, useCallback } from "react";
// import SettingServices from "@/services/SettingServices";
// import type { Setting, StoreCustomizationSetting } from "@/types/settings";

// export const useSetting = () => {
//   const [storeSettings, setStoreSettings] = useState<Setting | null>(null);
//   const [customization, setCustomization] =
//     useState<StoreCustomizationSetting | null>(null);
//   const [globalSettings, setGlobalSettings] = useState<Setting | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   /**
//    * Fetches all essential settings in one go.
//    * Useful for app-wide initialization.
//    */
//   const fetchAllSettings = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const [store, custom, global] = await Promise.all([
//         SettingServices.getStoreSetting(),
//         SettingServices.getStoreCustomizationSetting(),
//         SettingServices.getGlobalSetting(),
//       ]);

//       setStoreSettings(store);
//       setCustomization(custom);
//       setGlobalSettings(global);
//     } catch (err: any) {
//       setError(err.message || "Failed to load store settings");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   /**
//    * Specifically fetch SEO settings for metadata updates.
//    */
//   const fetchSeoSettings = async () => {
//     try {
//       return await SettingServices.getStoreSeoSetting();
//     } catch (err) {
//       console.error("SEO Load Error:", err);
//       return null;
//     }
//   };

//   return {
//     storeSettings,
//     customization,
//     globalSettings,
//     loading,
//     error,
//     fetchAllSettings,
//     fetchSeoSettings,
//   };
// };
