import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const utilityStore = create(
  immer((set, get) => ({
    // ********* Toast *********
    toast: null,
    settoast: (data) => {
      set((state) => {
        state.toast = data
      })
    },
  })),
  {
    name: 'utilityStore',
  }
)

export default utilityStore
