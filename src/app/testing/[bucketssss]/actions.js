'use server'
import { cookies } from 'next/headers'

export const removeBucket = async () => {
  cookies().delete('bucket-testing')
}

export const getBucket = async () => {
  const cookie = cookies().get('bucket-testing')
  console.log('captured cookie', cookie)
}

export const setBucket = async (bucket) => {
  cookies().set('bucket-testing', bucket)
}
