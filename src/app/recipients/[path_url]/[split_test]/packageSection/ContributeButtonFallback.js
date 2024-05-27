import Image from 'next/image'
import logoWhite from '../images/logo-white-svg.svg'

const ContributeButtonFallback = () => {
  return (
    <div
      className={
        'flex bg-primary hover:bg-primary-600 transition-all duration-500 rounded-[10px] pt-3 px-[50px] border-4 border-white shadow-custom4 gap-3 cursor-pointer'
      }
    >
      <Image src={logoWhite} alt="logo-white" />
      <p className={'font-demiCond text-white'}>
        Click Here To Contribute
      </p>
    </div>
  )
}

export default ContributeButtonFallback
