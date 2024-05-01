import React from 'react'
import ClientDashboard from './ClientDashboard'
import { isAuthenticated } from '@/config/supabase/isAuthenticated'

const DashboardPage = async () => {
  const isUser = await isAuthenticated('/login?next=dashboard')
  return <ClientDashboard />
}

export default DashboardPage
