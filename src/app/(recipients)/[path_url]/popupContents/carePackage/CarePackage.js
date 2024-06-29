/* eslint-disable react-hooks/exhaustive-deps */
// import StepFour from "./StepFour"
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/store'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import { useEffect, useState } from 'react'
import { createClient } from '@/config/supabase/supabaseClient'

const CarePackage = ({
  parameters: { firstName, package_image, variation },
}) => {
  const {
    carePackage: { activeStep },
  } = useStore(utilityStore)
  const [donations, setdonations] = useState(null)

  const fetchDonations = async () => {
    const supabase = createClient()
    let { data: donations, error } = await supabase
      .from('donations')
      .select('*')
      .eq('recipient', firstName)
      .eq('source', 'Care Package')
    setdonations(donations)
  }

  useEffect(() => {
    fetchDonations()
  }, [])
  return (
    <>
      <div className={'flex h-fit w-full transition-all duration-1000'}>
        {activeStep === 1 && (
          <StepOne parameters={{ package_image, firstName, donations }} />
        )}
        {activeStep === 2 && <StepTwo />}
        {activeStep === 3 && <StepThree parameters={{ variation }} />}
      </div>
    </>
  )
}

export default CarePackage
