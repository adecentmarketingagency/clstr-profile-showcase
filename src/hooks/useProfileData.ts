import { useState, useCallback } from "react";
import { ProfileData } from "@/types/profile";
import { mockProfile } from "@/data/mockProfile";

export function useProfileData() {
  const [profile, setProfile] = useState<ProfileData>(mockProfile);

  const updateProfile = useCallback((updates: Partial<ProfileData>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  }, []);

  const updateSettings = useCallback(
    (updates: Partial<ProfileData["settings"]>) => {
      setProfile((prev) => ({
        ...prev,
        settings: { ...prev.settings, ...updates },
      }));
    },
    []
  );

  return { profile, updateProfile, updateSettings };
}
