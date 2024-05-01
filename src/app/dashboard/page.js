import React from 'react'
import ClientDashboard from './ClientDashboard'
import { isAuthenticated } from '@/config/supabase/isAuthenticated'

const DashboardPage = async () => {
  const supabase = await isAuthenticated('/login?next=dashboard')
  console.log('supabase', supabase)
  return <ClientDashboard />
}

export default DashboardPage
