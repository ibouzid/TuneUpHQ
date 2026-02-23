import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import type { StateCreator } from "zustand";
import type { User } from "../features/login/types/auth";

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;

  setAuth: (user: User, token: string) => void;
  logout: () => void;
}

const authStoreCreator: StateCreator<
  AuthState,
  [["zustand/devtools", never], ["zustand/persist", unknown]]
> = (set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  setAuth: (user, token) =>
    set(
      {
        user,
        token,
        isAuthenticated: true,
      },
      false,
      "auth/setAuth",
    ),

  logout: () =>
    set(
      {
        user: null,
        token: null,
        isAuthenticated: false,
      },
      false,
      "auth/logout",
    ),
});

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(authStoreCreator, {
      name: "tuneup-auth-storage",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }),
  ),
);
