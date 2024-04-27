import Icon_email from '@/app/components/icons/Icon_email'
import Icon_user from '@/app/components/icons/Icon_user'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import InputGroup from '@/app/components/inputsFields/InputGroup/InputGroup'
import InputLeftIcon from '@/app/components/inputsFields/InputGroup/InputLeftIcon'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const UserForm = ({ parameters: { setFNameLNameEmail, store } }) => {
  const { register, formState, watch } = useForm()
  const { errors } = formState
  const firstName = watch('firstName')
  const lastName = watch('lastName')
  const email = watch('email')

  useEffect(() => {
    if (firstName && lastName && email) {
      setFNameLNameEmail({ firstName, lastName, email })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstName, lastName, email])
  return (
    <div className="flex flex-col gap-4">
      <div className={'flex flex-col md:flex-row gap-3 mt-9'}>
        <InputGroup>
          <InputLeftIcon>
            <Icon_user className="size-5 text-[#989898]" />
          </InputLeftIcon>
          <Input
            error={errors?.firstName?.message}
            defaultValue={store?.donorFirstName}
            id="firstName"
            placeholder="First name*"
            {...register('firstName', {
              required: 'First name is required',
            })}
            variant="basic"
          />
        </InputGroup>

        <Input
          error={errors?.lastName?.message}
          defaultValue={store?.donorLastName}
          id="lastName"
          placeholder="Last name*"
          {...register('lastName', {
            required: 'Last name is required',
          })}
          variant="basic"
        />
      </div>

      <InputGroup>
        <InputLeftIcon>
          <Icon_email className="size-5 text-[#989898]" />
        </InputLeftIcon>
        <Input
          defaultValue={store?.donorEmailAddress}
          id="email"
          placeholder="Email*"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              // eslint-disable-next-line no-useless-escape
              value: /^[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/i,
              message: 'Please enter a valid email',
            },
          })}
          error={errors?.email?.message}
          variant="basic"
        />
      </InputGroup>
    </div>
  )
}

export default UserForm
