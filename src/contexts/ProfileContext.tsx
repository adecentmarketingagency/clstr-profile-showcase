import React, { createContext, useContext, ReactNode } from "react";
import { ProfileData } from "@/types/profile";
import { useProfileData } from "@/hooks/useProfileData";

interface ProfileContextType {
  profile: ProfileData;
  updateProfile: (updates: Partial<ProfileData>) => void;
  updateSettings: (updates: Partial<ProfileData["settings"]>) => void;
}

const ProfileContext = createContext<ProfileContextType | null>(null);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const data = useProfileData();
  return (
    <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider");
  return ctx;
}
