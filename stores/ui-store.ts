// src/stores/ui-store.ts
import { createStore } from 'zustand/vanilla'

export type UIState = {
  heroInView: boolean
}

export type UIActions = {
  setHeroInView: (inView: boolean) => void
}

export type UIStore = UIState & UIActions

export const defaultInitState: UIState = {
  heroInView: true,
}

export const createUIStore = (
  initState: UIState = defaultInitState,
) => {
  return createStore<UIStore>()((set) => ({
    ...initState,
    setHeroInView: (inView) => set({ heroInView: inView }),
  }))
}
