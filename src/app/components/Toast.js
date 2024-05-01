import React, { useEffect } from 'react'
import Icon_close from './icons/Icon_close'

// const [toast, settoast] = useState(null)

// settoast({
//    description: 'Lorem ipsum',
//    status: 'error',
// })

// Example: <Toast parameters={{ toast, settoast }} />

const getBackground = (status) => {
  if (status === 'error') {
    return 'bg-red-500'
  } else if (status === 'success') {
    return 'bg-green-500'
  } else {
    return 'bg-blue-500'
  }
}

const Toast = ({ parameters: { toast, settoast } }) => {
  const handleCloseClick = () => {
    settoast(null)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      settoast(null)
    }, toast?.duration || 2000)
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast])

  const statusBackground = getBackground(toast?.status)
  return (
    <>
      {toast && (
        <div
          className={`${statusBackground} text-white z-[999] rounded-md shadow-md pl-6 pr-2 py-4 w-[290px] absolute bottom-4 left-0 right-0 mx-auto md:top-4 md:bottom-[unset] md:left-[unset] md:right-4 flex-wrap`}
        >
          <div className={'flex items-center relative justify-between gap-3'}>
            <p className="leading-[22px] text-[17px] text-left">
              {toast?.description || 'Description'}
            </p>
            <div
              onClick={handleCloseClick}
              className={
                'p-[2px] items-center select-none rounded-sm active:bg-white active:bg-opacity-20'
              }
            >
              <Icon_close className="min-w-4 text-white" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Toast
