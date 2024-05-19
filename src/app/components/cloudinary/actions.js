'use server'
import axios from 'axios'
import crypto from 'crypto'

const generateSHA1 = async ({ publicId, apiSecret }) => {
  const timestamp = new Date().getTime()
  const data = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`
  const hash = crypto.createHash('sha1')
  hash.update(data)
  return hash.digest('hex')
}

export const handleDeleteImage = async (publicId) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const timestamp = new Date().getTime()
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET
  const signature = await generateSHA1({ publicId, apiSecret })
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`

  try {
    const response = await axios.post(url, {
      public_id: publicId,
      signature: signature,
      api_key: apiKey,
      timestamp: timestamp,
    })

    console.error(response)
  } catch (error) {
    console.error(error)
  }
}
