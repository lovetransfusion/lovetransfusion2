/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Menu from '@/app/components/Menu.js'
import Icon_down from '../icons/Icon_down'
import { useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

// const [selectedItem, setselectedItem] = useState([])

// const items = [
//   { name: 'Dog', value: 'Dog' },
//   { name: 'Carabao', value: 'Carabao' },
//   { name: 'Goat', value: 'Goat' },
// ]

// <Select_Custom
//   parameters={{
//     options: items,
//     selectedItem,
//     setselectedItem,
//     containerHeight: 200,
//     multiSelect: true,         // optional
//     optionsStyle: '',          // optional
//     placeholder,               // optional
//     containerWidth: 260,       // optional
//     menuStyle: 'w-[260px]',    // optional
//   }}
// />

export default function Select_Custom({
  className,
  parameters: {
    options,
    selectedItem,
    setselectedItem,
    placeholder,
    containerHeight,
    containerWidth,
    menuStyle,
    multiSelect,
    optionsStyle,
  },
  ...props
}) {
  const [showModal, setShowModal] = useState(false)
  const buttonRef = useRef(null)

  const removeItem = (item) => {
    const remainingSelection = selectedItem
      ?.map((cItem) => cItem)
      ?.filter((cItem) => cItem?.value !== item?.value)
    setselectedItem(remainingSelection)
  }

  const handleItemClick = (e, item) => {
    e.stopPropagation()
    if (
      multiSelect &&
      !selectedItem?.some((sItem) => sItem?.value === item.value)
    ) {
      setselectedItem([...selectedItem, item])
    } else if (!multiSelect) {
      setselectedItem([item])
      setShowModal(false)
    } else if (selectedItem?.some((sItem) => sItem?.value === item.value)) {
      removeItem(item)
    }
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }
  return (
    <div className={'relative w-full'}>
      <div
        className={twMerge(
          `py-[6px] px-4 select-none border-[#c7e9ff] border-[1px] rounded-md relative ${
            selectedItem?.length === 0 && 'text-primary'
          }`,
          className
        )}
        {...props}
        id="clt-modal"
        ref={buttonRef}
        onClick={toggleModal}
      >
        {!multiSelect && (
          <p className={''} onClick={toggleModal}>
            {selectedItem[0]?.name || placeholder || '-- Select --'}{' '}
          </p>
        )}
        {multiSelect && (
          <div className={'flex gap-1'} id="clt-modal">
            {selectedItem?.length > 0 ? (
              selectedItem?.map((item, index) => {
                return (
                  <p
                    key={index}
                    onClick={() => removeItem(item)}
                    className={'py-1 px-3 bg-primary-100 rounded-full'}
                  >
                    {item?.name}
                  </p>
                )
              })
            ) : (
              <p className={''} onClick={toggleModal}>
                {placeholder || '-- Select --'}
              </p>
            )}
          </div>
        )}
        <Icon_down className="size-4 absolute right-3 top-0 bottom-0 my-auto" />
      </div>
      {showModal && (
        <Menu
          showModal={showModal}
          setShowModal={setShowModal}
          referenceElement={buttonRef}
          containerHeight={containerHeight}
          containerWidth={containerWidth}
          className={twMerge(
            'justify-start divide-y-[1px] divide-neutral-300',
            menuStyle
          )}
        >
          {options?.map((item, index) => {
            return (
              <p
                key={index}
                onClick={(e) => handleItemClick(e, item)}
                className={twMerge(
                  `p-3 ${
                    selectedItem?.some((sItem) => sItem?.value === item.value)
                      ? 'bg-primary-100'
                      : 'hover:bg-primary-50'
                  }`,
                  optionsStyle
                )}
              >
                {item.name}
              </p>
            )
          })}
        </Menu>
      )}
    </div>
  )
}
