import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UserStore = {
  hasFinishedOnboarding: boolean;
  toggleHasOnboarded: () => void;
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      hasFinishedOnboarding: false,
      toggleHasOnboarded: () => {
        set((state) => {
          return {
            ...state,
            hasFinishedOnboarding: !state.hasFinishedOnboarding,
          };
        });
      },
    }),
    {
      name: "plantly-user-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
