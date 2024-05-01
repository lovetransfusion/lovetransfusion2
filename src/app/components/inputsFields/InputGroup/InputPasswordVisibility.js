import React from 'react'
import Button from '../../Button'

// Example: {
// <InputPasswordVisibility onClick={showHideClicked}>
//    {!showPassword ? 'show' : 'hide'}
// </InputPasswordVisibility>
// }

const InputPasswordVisibility = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      className="absolute right-2 top-0 bottom-0 my-auto py-1 px-2 text-xs bg-neutral-100 hover:bg-neutral-50 active:bg-neutral-200 text-neutral-600"
    >
      {children}
    </Button>
  )
}

export default InputPasswordVisibility
