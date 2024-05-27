'use client'

import Image from 'next/image'
import CltDropzone from '../components/dropzone/Dropzone'

const ClientTestingPage = () => {
//   const [blurData, setblurData] = useState(null)
//   const myFunction = async () => {
//     const res = await generateBlurDataURL(
//       'https://res.cloudinary.com/dvmoprgat/image/upload/v1710846415/cld-sample-3.jpg'
//     )
//     console.log('res', res)
//     setblurData(res)
//   }

//   useEffect(() => {
//     myFunction()
//   }, [])

  return (
    <div>
      <CltDropzone />
      <Image
        src={
          'https://res.cloudinary.com/dvmoprgat/image/upload/v1710846416/cld-sample-5.jpg'
        }
        alt="test"
        width={493}
        height={329}
        placeholder="blur"
        blurDataURL={
          'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUGA//EAB0QAAIDAQADAQAAAAAAAAAAAAABAgQRAwUTITL/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQF/8QAGhEBAQACAwAAAAAAAAAAAAAAAAMBEgITFP/aAAwDAQACEQMRAD8AyNTr9RZqT3DPVN1F2itwLFtjo8elXh+UDpy5twQG7LPbliqqWl/xyWoAy4lWaWvCPqQALUL/2Q=='
        }
      />
    </div>
  )
}

export default ClientTestingPage
