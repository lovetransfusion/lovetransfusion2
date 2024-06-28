'use client'
import { forwardRef, useEffect } from 'react'
import { NumericFormat } from 'react-number-format'
import { twMerge } from 'tailwind-merge'

// Example:
// <NumberInput parameters={{ donationAmount, setdonationAmount, defaultValue: 10 }} />

const NumberInput = forwardRef(function NumberInput(
  {
    className,
    parameters: { donationAmount, setdonationAmount, defaultValue },
    ...props
  },
  ref
) {
  const handleOnChange = (e) => {
    const val = e.target.value
    const replaced = val.replace(/^\$|,/g, '')
    const parsed = parseFloat(replaced)
    if (parsed) {
      setdonationAmount(parsed)
    } else {
      setdonationAmount(null)
    }
  }

  useEffect(() => {
    setdonationAmount(defaultValue)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleBlur = () => {
    if (!donationAmount) {
      setdonationAmount(defaultValue)
    }
  }
  return (
    <div>
      <NumericFormat
        {...props}
        getInputRef={ref}
        required
        // to add currency use prefix
        // prefix='$'
        onBlur={handleBlur}
        value={donationAmount}
        defaultValue={defaultValue}
        decimalScale={2}
        thousandSeparator=","
        fixedDecimalScale={true}
        allowNegative={false}
        onChange={handleOnChange}
        className={twMerge(
          'text-center border-[1px] border-[#8c8c8c] rounded-[4px] py-[18px] px-[10px] w-full',
          className
        )}
      />
    </div>
  )
})

export default NumberInput
