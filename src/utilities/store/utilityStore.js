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
    user: null,
    setUser: (data) => {
      set((state) => {
        state.user = data
      })
    },
    isMobileMenuOpen: false,
    setIsMobileMenuOpen: () => {
      set((state) => {
        // console.log('state', state)
        // console.log('state.isMobileMenuOpen', state.isMobileMenuOpen)
        state.isMobileMenuOpen = !state.isMobileMenuOpen
      })
    },
  })),
  {
    name: 'utilityStore',
  }
)

export default utilityStore
