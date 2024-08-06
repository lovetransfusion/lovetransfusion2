import { createServer } from '@/config/supabase/supabaseServer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Hugs from './Hugs'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import AddNewButton from './add-recipient/AddNewButton'
import Icon_newtab from '@/app/components/icons/Icon_newtab'
import Button from '@/app/components/Button'
import SetImages from './change-image/SetImages'
import profilePlaceholder from '@/app/images/profile_picture_placeholder.jpg'
import Icon_pencil from '@/app/components/icons/Icon_pencil'

const ListOfRecipientsPage = async () => {
  const user = await getCurrentUser()
  const supabase = createServer()
  const { data: recipients, error } = await supabase
    .from('recipients')
    .select(
      'id, hugs, first_name, condition, profile_picture, path_url, created_at'
    )

  const getImages = async () => {
    const { data: images, error: errorImage } = await supabase
      .from('admin_gallery')
      .select()
    if (images) {
      return images
    } else {
      return errorImage
    }
  }
  let gallery
  if (user?.role === 'super_admin' || user?.role === 'admin') {
    gallery = await getImages()
  }

  return (
    <div className={'w-full'}>
      <div className={'flex justify-between min-h-9'}>
        <h2 className={'text-xl font-semibold text-primary'}>Recipients</h2>
        {(user?.role === 'super_admin' || user?.role === 'admin') && (
          <AddNewButton user={user} />
        )}
      </div>

      <div className={'overflow-x-scroll md:overflow-auto'}>
        <table className="table-auto w-full my-6">
          <thead>
            <tr className="text-left bg-primary-300 rounded-full border-b-2 border-primary-400 text-white">
              <th className="px-3 py-3"></th>
              <th className="px-3 py-3">Name</th>
              <th className="px-3 py-3">Number of hugs</th>
              <th className="px-3 py-3">Date Added</th>
              <th className="px-3 py-3">Condition</th>
              {(user?.role === 'super_admin' || user?.role === 'admin') && (
                <th className="px-3 py-3">Upload</th>
              )}
              {(user?.role === 'super_admin' || user?.role === 'admin') && (
                <th className="px-3 py-3">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {recipients
              ?.sort((a, b) => {
                const dateA = new Date(a?.created_at)
                const dateB = new Date(b?.created_at)
                return dateB - dateA
              })
              ?.map((recipient, index) => {
                const {
                  id,
                  hugs,
                  first_name,
                  condition,
                  profile_picture,
                  path_url,
                  created_at,
                } = recipient
                return (
                  <tr key={index} className="even:bg-primary-50">
                    <td className="w-[190px]">
                      <div
                        className={
                          'relative w-full h-full max-w-[150px] max-h-[150px] min-w-[150px] min-h-[150px]'
                        }
                      >
                        <Link href={`/${path_url}`} target="_blank">
                          <Image
                            quality={100}
                            fill
                            src={
                              (profile_picture?.fullPath &&
                                `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}/${profile_picture?.fullPath}`) ||
                              profile_picture?.url ||
                              profilePlaceholder
                            }
                            placeholder="blur"
                            blurDataURL={profile_picture?.blurDataURL}
                            sizes="100vw"
                            alt="profile picture of the recipient"
                            className="object-cover"
                          />
                        </Link>
                      </div>
                    </td>
                    <td className={'px-3 py-3'}>
                      <div className={'w-fit'}>
                        <Link href={`/${path_url}`}>
                          <div
                            className={'group flex items-center gap-2 w-fit'}
                          >
                            {first_name}
                            <Icon_newtab className="group-hover:text-primary size-4" />
                          </div>
                        </Link>
                      </div>
                    </td>
                    <td className={'px-3 py-3'}>
                      <Hugs parameters={{ hugs, id, path_url }} />
                    </td>
                    <td className={'px-3 py-3'}>
                      {new Date(created_at).toLocaleDateString()}
                    </td>
                    <td className={'px-3 py-3'}>{condition}</td>
                    {(user?.role === 'super_admin' ||
                      user?.role === 'admin') && (
                      <td className={'px-3 py-3'}>
                        <div className={'flex flex-col gap-1'}>
                          <SetImages user={user} images={gallery} id={id} />
                        </div>
                      </td>
                    )}
                    {(user?.role === 'super_admin' ||
                      user?.role === 'admin') && (
                      <td className={'px-3 py-3'}>
                        <div className={'flex flex-col gap-1'}>
                          <Icon_pencil className='' />
                        </div>
                      </td>
                    )}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListOfRecipientsPage
