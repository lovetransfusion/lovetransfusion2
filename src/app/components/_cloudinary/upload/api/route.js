import { v2 as cloudinary } from 'cloudinary'

export async function POST(request) {
  const body = await request.json()
  const { paramsToSign } = body

  const timestamp = new Date().getTime()
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY

  const parameters = { ...paramsToSign, timestamp }
  const signature = cloudinary.utils.api_sign_request(
    parameters,
    process.env.CLOUDINARY_API_SECRET
  )

  return Response.json({ signature, timestamp, apiKey })
}
