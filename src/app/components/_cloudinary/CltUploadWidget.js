'use client'
import { CldUploadWidget } from 'next-cloudinary'
import Button from '../Button'

const CltUploadWidget = ({ parameters }) => {
  const customOptions = {
    folder: parameters?.folder || null,
  }
  return (
    <div>
      <CldUploadWidget
        //*********** generate signed Upload Signature key ***********
        signatureEndpoint={
          process.env.NEXT_PUBLIC_ROOT_DOMAIN + '/components/cloudinary/api'
        }
        //*********** API Key ***********
        apiKey={process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}
        //*********** Options ***********
        options={{
          maxFiles: parameters?.maxFiles || 'unlimited',
          tags: parameters?.tags || null, //Example: ['users', 'content']
        }}
        //*********** Process results ***********
        onQueuesEnd={(result, { widget }) => {
          const uploads = result?.info?.files?.map((res) => {
            const file_name = res.name
            const public_id = res.uploadInfo.public_id
            const url = res.uploadInfo.secure_url
            const upload = {
              file_name,
              public_id,
              url,
            }
            return upload
          })
          if (!uploads) return
          parameters?.setuploadedFiles(uploads)
          widget.close()
        }}
      >
        {({ cloudinary, widget, open }) => {
          widget?.update(customOptions)
          return (
            <>
              <Button onClick={() => open()}>
                {parameters?.customText || 'Upload Images'}
              </Button>
            </>
          )
        }}
      </CldUploadWidget>
    </div>
  )
}

export default CltUploadWidget
