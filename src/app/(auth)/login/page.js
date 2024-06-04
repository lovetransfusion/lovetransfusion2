import { Suspense } from 'react'
import ClientLogin from './ClientLogin'

const LoginPage = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <ClientLogin />
      </Suspense>
    </>
  )
}

export default LoginPage
