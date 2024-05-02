import dynamic from 'next/dynamic'
import { Suspense } from 'react'
const ClientLogin = dynamic(() => import('./ClientLogin'), { ssr: false })

const LoginPage = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>} >
        <ClientLogin />
      </Suspense>
    </>
  )
}

export default LoginPage
