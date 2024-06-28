import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const addRecipientStore = create(
  immer((set, get) => ({
    // ********* Add Recipient *********
    recipient: {
      sec_one_paragraph: null,
      according_to_paragraph: null,
      profile_picture: {},
      package_image: {},
      poster_image: {},
    },
    setSec_one_paragraph: (value) => {
      set((state) => {
        state.recipient.sec_one_paragraph = value
      })
    },
    setAccording_to_paragraph: (value) => {
      set((state) => {
        state.recipient.according_to_paragraph = value
      })
    },
    setProfilePicture: (value) => {
      set((state) => {
        state.recipient.profile_picture = value
      })
    },
    setPackageImage: (value) => {
      set((state) => {
        state.recipient.package_image = value
      })
    },
    setPosterImage: (value) => {
      set((state) => {
        state.recipient.poster_image = value
      })
    },
  })),
  {
    name: 'addRecipientStore',
  }
)

export default addRecipientStore
