import Gallery from '@/app/components/gallery/Gallery'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import { createServer } from '@/config/supabase/supabaseServer'
import React from 'react'

const MediaPage = async () => {
  const user = await getCurrentUser()
  console.log('user', user)
  const supabase = createServer()
  const { data: images, error } = await supabase.from('admin_gallery').select()
  console.log('images', images)
  return (
    <div className="w-full">
      <Gallery user={user} images={images} />
    </div>
  )
}

export default MediaPage
