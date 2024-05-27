import AuthTest from './AuthTest'
import UploadTest from './UploadTest'

const TestingVariant = () => {
  return (
    <div className={'container md:px-6 lg:px-10 xl:px-0 flex flex-col'}>
      <UploadTest />
      <AuthTest />
    </div>
  )
}

export default TestingVariant
