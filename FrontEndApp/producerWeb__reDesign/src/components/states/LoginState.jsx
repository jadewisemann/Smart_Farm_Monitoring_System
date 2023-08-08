import { create } from "zustand";

const useStore = create(set => ({
  isLoggedIn: true,
  setLogIn: () => set(() => ({ isLoggedIn: true })),
  setLogOut: () => set(() => ({ isLoggedIn: false })),
}))

export default useStore