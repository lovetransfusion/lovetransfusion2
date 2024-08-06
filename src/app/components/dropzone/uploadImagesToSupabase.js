import { createClient } from '@/config/supabase/supabaseClient'
import { revalidatePath } from 'next/cache'

const generateDateString = () => {
  const date = new Date()
  const day = date.getDay()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const milliSeconds = date.getMilliseconds()
  return `${day}${month}${year}${milliSeconds}`
}

export const uploadProfilePicture = async ({
  folder,
  table,
  images,
  userId,
}) => {
  const supabase = createClient()
  const uploadFile = images?.map(async (imgObj) => {
    const imageName = imgObj?.file?.path.replace(' ', '_').toLowerCase()
    const dateString = generateDateString()
    const { data: imageData, error } = await supabase.storage
      .from(folder)
      .upload(`${userId}/${dateString}-${imageName}`, imgObj?.file, {
        cacheControl: '3600',
        upsert: false,
      })
    return {
      ...imageData,
      blurDataURL: imgObj?.blurDataURL,
    }
  })

  const imagesUploadedToStorage = await Promise.all(uploadFile)
  const { data, error } = await supabase
    .from(folder)
    .insert(imagesUploadedToStorage)
    .select()

  if (data) {
    const { data: userData, error: userError } = await supabase
      .from('users')
      .update({ profilePicture: imagesUploadedToStorage[0] })
      .eq('id', userId)
      .select()

    if (userError) {
      return { data: null, error: userError?.message }
    }
    return { data: userData, error: null }
  } else if (error) {
    return { data: null, error: error?.message }
  }
}

export const uploadImagesToSupabase = async ({
  folder,
  images,
  userId,
  table,
}) => {
  const supabase = createClient()
  const uploadFile = images?.map(async (imgObj) => {
    const imageName = imgObj?.file?.path.replace(' ', '_').toLowerCase()
    const dateString = generateDateString()
    const { data: imageData, error } = await supabase.storage
      .from(folder)
      .upload(`${userId}/${dateString}-${imageName}`, imgObj?.file, {
        cacheControl: '3600',
        upsert: false,
      })
    return {
      ...imageData,
      blurDataURL: imgObj?.blurDataURL,
    }
  })

  const imagesUploadedToStorage = await Promise.all(uploadFile)
  const { data, error } = await supabase
    .from(table)
    .insert(imagesUploadedToStorage)
    .select()
  if (data) {
    return { data: data, error: null }
  } else if (error) {
    return { data: null, error: error?.message }
  }
}
