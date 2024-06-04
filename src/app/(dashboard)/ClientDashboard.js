'use client'
import React from 'react'
import Button from '../components/Button'
import { logout } from '../(auth)/signOut/actions'

const ClientDashboard = () => {
  const handleLogout = () => {
    logout()
  }
  return (
    <div className={'flex gap-y-10'}>
      <div className={'container md:px-6 lg:px-10 xl:px-0 flex flex-col'}>
        <p className={''}>You are logged in.</p>
        <p className={''}>Dashboard Page</p>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  )
}

export default ClientDashboard
