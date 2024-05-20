'use server'
import axios from 'axios'
import crypto from 'crypto'

const generateSHA1 = async ({ id, apiSecret }) => {
  const timestamp = new Date().getTime()
  const data = `public_id=${id}&timestamp=${timestamp}${apiSecret}`
  const hash = crypto.createHash('sha1')
  hash.update(data)
  return hash.digest('hex')
}

const generateAndDelete = (publicId) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  publicId.map(async (id) => {
    const timestamp = new Date().getTime()
    const signature = await generateSHA1({ id, apiSecret })
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`

    try {
      const response = await axios.post(url, {
        public_id: id,
        signature: signature,
        api_key: apiKey,
        timestamp: timestamp,
      })

      console.error(response)
    } catch (error) {
      console.error(error)
    }
  })
}

// publicId must be an array
export const handleDeleteImage = async (publicId) => {
  Promise.all(generateAndDelete(publicId))
}

// folderName must be a string
export const handleDeleteFolder = async (folderName) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  const url = `https://${apiKey}:${apiSecret}@api.cloudinary.com/v1_1/${cloudName}/folders/${folderName}`

  await axios.delete(url)
}
