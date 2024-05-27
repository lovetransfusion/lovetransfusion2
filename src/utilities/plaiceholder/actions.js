'use server'

const sharp = require('sharp')

export async function generateBlurDataURL(imageUrl) {
  const response = await fetch(imageUrl)
  console.log({ imageUrl, response })
  const imageBuffer = await response.arrayBuffer()

  // Use sharp to resize and blur the image
  const blurredImageBuffer = await sharp(imageBuffer)
    .resize({ width: 20, height: 20 }) // Adjust dimensions as needed
    .blur(10) // Adjust blur level as needed
    .toBuffer()

  // Encode blurred image as base64 string
  const blurDataURL = `data:image/jpeg;base64,${blurredImageBuffer.toString(
    'base64'
  )}`
  return blurDataURL
}
