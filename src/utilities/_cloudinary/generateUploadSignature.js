'use server'
import { v2 as cloudinary } from 'cloudinary'

export const generateUploadSignature = async ({ paramsToSign }) => {
  const timestamp = new Date().getTime()
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY

  const parameters = { ...paramsToSign, timestamp }
  const signature = cloudinary.utils.api_sign_request(
    parameters,
    process.env.CLOUDINARY_API_SECRET
  )

  return { signature, timestamp, apiKey }
}
