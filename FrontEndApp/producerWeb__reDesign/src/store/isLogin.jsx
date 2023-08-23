import { create } from 'zustand'

export const useIsLoginStore = create((set) => ({
  isLogin: false,
  setLogin: () => set({ isLogin: true }),
  setLogout: () => set({ isLogin: false }),
}))