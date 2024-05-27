'use server'
import ClientTestingPage from './ClientTestingPage'

const TestingVariant = ({ params }) => {
  console.log('params', params)
  return (
    <div className={'container md:px-6 lg:px-10 xl:px-0 flex flex-col'}>
      <p className={''}>You are now in {params?.bucket}</p>
      <ClientTestingPage />
    </div>
  )
}

export default TestingVariant
