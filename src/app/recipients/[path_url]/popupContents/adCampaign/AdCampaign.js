// import StepFour from "./StepFour"
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/store'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

const AdCampaign = ({
  parameters: { firstName, gender, package_image, variation },
}) => {
  const {
    adCampaign: { activeStep },
  } = useStore(utilityStore)
  return (
    <>
      <div className={'flex h-fit w-full transition-all duration-1000'}>
        {activeStep === 1 && (
          <StepOne parameters={{ package_image, gender, firstName }} />
        )}
        {activeStep === 2 && <StepTwo firstName={firstName} />}
        {activeStep === 3 && <StepThree parameters={{ variation }} />}
      </div>
    </>
  )
}

export default AdCampaign
