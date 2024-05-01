import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

const utilityStore = create(
  immer((set, get) => ({
    // ********* Popup *********
    popup: null,
    setPopup: (data) => {
      set((state) => {
        state.popup = data
      })
    },
    // ********* Care Package *********
    carePackage: {
      activeStep: 1,
      pIntent: null,
      donationAmount: 10,
      donorFirstName: "",
      donorLastName: "",
      donorEmailAddress: "",
      donee: "",
      targetPathURL: "",
      priceList: [
        { id: 1, price: "$10.00", active: true },
        { id: 2, price: "$25.00", active: false },
        { id: 3, price: "$50.00", active: false },
        { id: 4, price: "$100.00", active: false },
        { id: 5, price: "$250.00", active: false },
        { id: 6, price: "Custom Amount", active: false },
      ],
    },
    setactiveStep: (value) => {
      set((state) => {
        state.carePackage.activeStep = value
      })
    },
    setpIntent: (value) => {
      set((state) => {
        state.carePackage.pIntent = value
      })
    },
    setDonee: (name) => {
      set((state) => {
        state.carePackage.donee = name
      })
    },
    setActivePrice: (id) => {
      set((state) => {
        const priceList = get().carePackage.priceList
        const updatedList = priceList.map((item) => {
          if (item.id === id) {
            const update = { ...item, active: true }
            return update
          } else {
            const update = { ...item, active: false }
            return update
          }
        })
        state.carePackage.priceList = updatedList
      })
    },
    setDonationAmount: (value) => {
      set((state) => {
        state.carePackage.donationAmount = value
      })
    },
    setFNameLNameEmail: (data) => {
      const { firstName, lastName, email } = data
      set((state) => {
        const current = get().carePackage
        const updated = {
          ...current,
          donorFirstName: firstName,
          donorLastName: lastName,
          donorEmailAddress: email,
        }
        state.carePackage = updated
      })
    },
    // ********* Ad Campaign *********
    adCampaign: {
      activeStep: 1,
      pIntent: null,
      donationAmount: 25,
      donorFirstName: "",
      donorLastName: "",
      donorEmailAddress: "",
      donee: "",
      targetPathURL: "",
      priceList: [
        { id: 1, price: "$10.00", active: false },
        { id: 2, price: "$25.00", active: true },
        { id: 3, price: "$50.00", active: false },
        { id: 4, price: "$100.00", active: false },
        { id: 5, price: "$250.00", active: false },
        { id: 6, price: "Custom Amount", active: false },
      ],
    },
    setactiveStepAC: (value) => {
      set((state) => {
        state.adCampaign.activeStep = value
      })
    },
    setpIntentAC: (value) => {
      set((state) => {
        state.adCampaign.pIntent = value
      })
    },
    setDoneeAC: (name) => {
      set((state) => {
        state.adCampaign.donee = name
      })
    },
    setActivePriceAC: (id) => {
      set((state) => {
        const priceList = get().adCampaign.priceList
        const updatedList = priceList.map((item) => {
          if (item.id === id) {
            const update = { ...item, active: true }
            return update
          } else {
            const update = { ...item, active: false }
            return update
          }
        })
        state.adCampaign.priceList = updatedList
      })
    },
    setDonationAmountAC: (value) => {
      set((state) => {
        state.adCampaign.donationAmount = value
      })
    },
    setFNameLNameEmailAC: (data) => {
      const { firstName, lastName, email } = data
      set((state) => {
        const current = get().adCampaign
        const updated = {
          ...current,
          donorFirstName: firstName,
          donorLastName: lastName,
          donorEmailAddress: email,
        }
        state.adCampaign = updated
      })
    },
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
    name: "utilityStore",
  }
)

export default utilityStore
