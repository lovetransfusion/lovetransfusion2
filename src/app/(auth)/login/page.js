import dynamic from 'next/dynamic'
const ClientLogin = dynamic(() => import('./ClientLogin'), { ssr: false })

const LoginPage = ({ searchParams }) => {
  console.log('searchParams', searchParams)
  return <ClientLogin searchParams={searchParams} />
}

export default LoginPage