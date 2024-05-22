'use client'
import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Input from './inputsFields/InputGroup/Input'
// import { RiDeleteBinLine } from "react-icons/ri"
// import { IoImagesOutline } from "react-icons/io5"

const CltDropzone = ({
  maxSize,
  maxFiles,
  height,
  accept,
  title,
  getFiles,
  borderColor,
}) => {
  const [files, setfiles] = useState([])
  const toast = useToast()

  useEffect(() => {
    getFiles(files)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files])

  const onDropAccepted = (acceptedFiles, events) => {
    if (
      files.length < maxFiles &&
      files.length + acceptedFiles.length <= maxFiles
    ) {
      setfiles([...files, ...acceptedFiles])
    }
  }

  const onDropRejected = (fileRejections) => {
    toast({
      description: fileRejections[0].errors[0].code,
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }

  const { getRootProps, getInputProps } = useDropzone({
    maxSize: maxSize * 1048576,
    maxFiles,
    accept,
    onDropAccepted,
    onDropRejected,
  })

  const handleDelete = (e) => {
    e.stopPropagation()
    setfiles([])
  }
  return (
    <div
      className={`flex px-10 pb-4 h-[120px] rounded-md border-[1px] border-[#1da1f2] justify-center items-center relative overflow-hidden w-full ${
        files?.length > 0 && 'bg-primary'
      }`}
      {...getRootProps({ className: 'dropzone' })}
    >
      {/************** Close button **************/}
      <div className={'flex absolute top-2 right-2 gap-4 items-center'}>
        {maxSize && (
          <p className={'text-sm text-[#646c7f]'}>
            Max file size: {maxSize >= 1 ? maxSize : maxSize * 1024}
            {maxSize >= 1 ? 'MB' : 'KB'}
          </p>
        )}
        {maxSize && (
          <p className={'text-sm text-[#646c7f]'}>File limit: {maxFiles}</p>
        )}
        {/* <RiDeleteBinLine
          onClick={handleDelete}
          fontSize={'18px'}
          cursor={'pointer'}
          color="#646C7F"
          title="remove all"
        /> */}
      </div>
      {/************** Input **************/}
      <Input {...getInputProps()} />
      {files.length === 0 ? (
        <p className={'text-2xl text-[#646C7F]'}>
          {title || 'Drop your files here'}
        </p>
      ) : (
        //************** Counter **************
        <div className={'flex relative'}>
          <div
            className={
              'flex absolute size-5 justify-center text-[13px] items-center bg-white p-[2px] rounded-full top-[-2px] right-[-9px] border-[1px] border-[#ccc] shadow-md'
            }
          >
            <p className={''}>{files.length}</p>
          </div>
          {/* ************** Image Icon ************** */}
          {/* <IoImagesOutline fontSize={'52px'} color={'#646C7F'} /> */}
        </div>
      )}
      {/************** Bottom row **************/}
      <div
        className={`flex absolute bottom-0 left-0 w-full px-2 ${
          files?.length > 0 ? 'bg-primary-100' : 'bg-[#ebecee]'
        }`}
      >
        <p className={'text-[#646c7f'}>
          Allowed types:{' '}
          {accept.image.map((type) => {
            const item = type.replace('image/', '')
            return ' .' + item
          })}
        </p>
      </div>
    </div>
  )
}

export default CltDropzone
