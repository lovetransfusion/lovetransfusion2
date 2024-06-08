'use client'
import { useEffect } from 'react'
import Button from '../components/Button'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="text-center w-full">
      <h2 className="text-xl font-semibold">Something went wrong!</h2>
      <p className="mb-3">{error.message}</p>
      <Button onClick={() => reset()} className="mx-auto">
        Try again
      </Button>
    </div>
  )
}
