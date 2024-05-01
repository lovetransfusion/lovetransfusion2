import React from 'react'
import RecipientsPage from './recipients/page'

export const revalidate = 30

const Homepage = () => {
  return (
    <div>
      <RecipientsPage />
    </div>
  )
}

export default Homepage
