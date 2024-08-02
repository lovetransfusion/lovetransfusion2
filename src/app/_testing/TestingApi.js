'use client'
import axios from 'axios'
import React, { useEffect } from 'react'

const TestingApi = () => {
  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/api/recipients`
      // {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // }
    )
    console.log('response', response)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className={'py-10 md:py-[80px]'}>
      <div className={'container md:px-6 lg:px-10 xl:px-0'}></div>
    </div>
  )
}

export default TestingApi