import utilityStore from '@/utilities/store/store'
import { useStore } from 'zustand'
import UserForm from '../UserForm'

const UserFormAdCampaign = () => {
  const { adCampaign, setFNameLNameEmailAC } = useStore(utilityStore)

  return (
    <UserForm
      parameters={{
        setFNameLNameEmail: setFNameLNameEmailAC,
        store: adCampaign,
      }}
    />
  )
}

export default UserFormAdCampaign
