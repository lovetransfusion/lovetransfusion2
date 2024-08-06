'use client'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import Select_Custom from '@/app/components/inputsFields/Select_Custom'

const MoreWaysToSupport = ({
  parameters: { waysToSupport, setwaysToSupport },
}) => {
  const items = [
    { name: 'Facebook', value: 'facebook', url: null },
    { name: 'CaringBridge', value: 'CaringBridge', url: null },
    { name: 'GoFundMe', value: 'GoFundMe', url: null },
    { name: 'Meal Train', value: 'MealTrain', url: null },
  ]

  const handleChange = ({ e, value }) => {
    setwaysToSupport(
      waysToSupport?.map((item) => {
        if (item?.value === value) {
          return { ...item, url: e.target.value || null }
        }
        return item
      })
    )
  }

  const removeItem = (item) => {
    setwaysToSupport(
      waysToSupport
        ?.map((cItem) => cItem)
        ?.filter((cItem) => cItem?.value !== item?.value)
    )
  }

  const handleItemClick = (item) => {
    if (!waysToSupport?.some((sItem) => sItem?.value === item.value)) {
      setwaysToSupport([...waysToSupport, item])
    } else {
      removeItem(item)
    }
  }

  return (
    <div className="mt-5 border-neutral-300 border-[1px] px-5 py-6 rounded-md relative">
      <div className={''}>
        <p className={'absolute left-5 -top-[14px] bg-white px-4'}>
          More ways to support:
        </p>
        <div className={'flex flex-col md:flex-row gap-2'}>
          {items?.map((item, index) => {
            const { name, value, url } = item
            return (
              <p
                onClick={() => handleItemClick(item)}
                key={index}
                className={`py-2 px-4 border-[1px] select-none rounded-md ${
                  waysToSupport?.some((sItem) => sItem.value === value)
                    ? 'bg-primary-100 border-primary'
                    : 'border-neutral-200'
                }`}
              >
                {name}
              </p>
            )
          })}
        </div>
      </div>
      {waysToSupport?.length > 0 && (
        <div
          className={`grid grid-cols-1 mt-5 ${
            waysToSupport?.length > 1 && 'md:grid-cols-2'
          } gap-2 py-2`}
        >
          {waysToSupport?.map((item, index) => {
            const { name, value, url } = item
            return (
              <div className={'flex flex-col gap-1'} key={index}>
                <label htmlFor={value}>{name}</label>
                <Input
                  id={value}
                  value={url || 'https://'}
                  type="url"
                  placeholder={`${name} URL`}
                  variant="input2"
                  onChange={(e) => handleChange({ value, e })}
                  className="transition-all duration-700"
                />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default MoreWaysToSupport
