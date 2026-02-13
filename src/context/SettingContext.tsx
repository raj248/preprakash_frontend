import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import SettingServices from "@/services/SettingServices";
import type { Setting, StoreCustomizationSetting } from "@/types/settings";

// Define the shape of our Context
interface SettingContextType {
  storeSettings: Setting | null;
  customization: StoreCustomizationSetting | null;
  globalSettings: Setting | null;
  loading: boolean;
  error: string | null;
  refreshSettings: () => Promise<void>;
}

const SettingContext = createContext<SettingContextType | undefined>(undefined);

export const SettingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [storeSettings, setStoreSettings] = useState<Setting | null>(null);
  const [customization, setCustomization] =
    useState<StoreCustomizationSetting | null>(null);
  const [globalSettings, setGlobalSettings] = useState<Setting | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllSettings = useCallback(async () => {
    setLoading(true);
    try {
      const [store, custom, global] = await Promise.all([
        SettingServices.getStoreSetting(),
        SettingServices.getStoreCustomizationSetting(),
        SettingServices.getGlobalSetting(),
      ]);

      setStoreSettings(store);
      setCustomization(custom);
      setGlobalSettings(global);
    } catch (err: any) {
      setError(err.message || "Failed to load settings");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch settings once when the app starts
  useEffect(() => {
    fetchAllSettings();
  }, [fetchAllSettings]);

  return (
    <SettingContext.Provider
      value={{
        storeSettings,
        customization,
        globalSettings,
        loading,
        error,
        refreshSettings: fetchAllSettings,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};

// Custom hook to use the Settings Context
export const useSettings = () => {
  const context = useContext(SettingContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingProvider");
  }
  return context;
};

// export default SettingContext;
