/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Image from 'next/image'
import { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { generateBlurDataURL } from './actions'

// guide:
// Add these
// const [selectedImages, setSelectedImages] = useState([])
// const [imagesWithBlurDataUrl, setImagesWithBlurDataUrl] = useState(null)

{
  /* <CltDropzone
        parameters={{
          selectedImages,
          setSelectedImages,
          setImagesWithBlurDataUrl,
        }}
      /> */
}

const CltDropzone = ({
  parameters: { selectedImages, setSelectedImages, setImagesWithBlurDataUrl },
}) => {
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      setSelectedImages((prevState) => [...prevState, file])
    })
  }, [])
  const onUpload = async () => {
    let formData = new FormData()
    for (const image of selectedImages) {
      formData.append(image.name, image)
    }
    const blurDataImages = await generateBlurDataURL(formData)
    const newSelectedImages = selectedImages?.map((image) => {
      const data = blurDataImages.find((item) => item.key === image.path)
      const newFile = { file: image, blurDataURL: data.blurDataURL }
      return newFile
    })
    setImagesWithBlurDataUrl(newSelectedImages)
  }
  useEffect(() => {
    if (selectedImages?.length <= 0) return
    onUpload()
  }, [selectedImages])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
  })

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div
          className={
            'bg-white text-[#C4C6C9] py-[7px] px-3 border-[1px] border-primary border-dashed'
          }
        >
          {isDragActive ? (
            <p>Drop file(s) here ...</p>
          ) : (
            <p>Click to upload files, or drag & drop files here.</p>
          )}
        </div>
      </div>

      {selectedImages.length > 0 && (
        <div className={'grid grid-cols-2 md:grid-cols-4 gap-2 mt-2'}>
          {selectedImages?.map((image, index) => (
            <Image
              src={`${URL.createObjectURL(image)}`}
              width={300}
              height={300}
              quality={100}
              key={index}
              alt="uploaded image"
              className="my-auto"
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CltDropzone
