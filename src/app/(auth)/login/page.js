import dynamic from 'next/dynamic'
const ClientLogin = dynamic(() => import('./ClientLogin'), { ssr: false })

const LoginPage = () => {
  return <ClientLogin />
}

export default LoginPage
