import utilityStore from '@/utilities/store/store'
import { useStore } from 'zustand'
import UserForm from '../UserForm'

const UserFormCarePackage = () => {
  const { carePackage, setFNameLNameEmail } = useStore(utilityStore)

  return <UserForm parameters={{ setFNameLNameEmail, store: carePackage }} />
}

export default UserFormCarePackage
