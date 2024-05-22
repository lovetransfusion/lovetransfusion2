'use server'
import { generateUploadSignature } from '@/utilities/_cloudinary/generateUploadSignature'
import axios from 'axios'

export const startUploadingImages = async (formData) => {
  const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`

  const { signature, timestamp, apiKey } = generateUploadSignature({
    paramsToSign: { folder: 'signed_upload_demo_uw' },
  })
  console.log({ signature, timestamp, apiKey })

  for (const [key, value] of formData) {
    console.log('value', value)
    try {
      const response = await axios.post(
        url,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
        {
          file: value,
          timestamp: timestamp,
          api_key: apiKey,
          signature: signature,
        }
      )
      console.log('response data', response.data)
    } catch (error) {
      console.log('error is', error)
    }
  }
}
