// import StepFour from "./StepFour"
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/store'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

const CarePackage = ({
  parameters: { id, firstName, condition, package_image },
}) => {
  console.log('firstName', firstName)
  const {
    carePackage: { activeStep },
  } = useStore(utilityStore)
  console.log('care package')
  return (
    <>
      <div className={'flex h-fit w-full transition-all duration-1000'}>
        {activeStep === 1 && (
          <StepOne parameters={{ package_image, firstName }} />
        )}
        {activeStep === 2 && <StepTwo />}
        {activeStep === 3 && <StepThree />}
      </div>
    </>
  )
}

export default CarePackage
