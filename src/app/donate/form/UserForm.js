import Icon_email from '@/app/components/icons/Icon_email'
import Icon_user from '@/app/components/icons/Icon_user'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import InputGroup from '@/app/components/inputsFields/InputGroup/InputGroup'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const UserForm = ({ setuserData }) => {
  const { register, watch } = useForm()
  const firstName = watch('firstName')
  const lastName = watch('lastName')
  const email = watch('email')

  useEffect(() => {
    setuserData({ firstName, lastName, email })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstName, lastName, email])
  return (
    <div className={'flex flex-col gap-[15px] md:gap-6'}>
      <div className={'flex flex-col md:flex-row gap-[15px] md:gap-6'}>
        <InputGroup>
          <Input
            id="firstName"
            placeholder="First Name"
            className={
              'border-[#666666] py-[31px] shadow-customInner1 placeholder:text-[#828282]'
            }
            {...register('firstName', {
              required: 'Enter your email address',
            })}
          />
          <Icon_user className="absolute top-0 bottom-0 my-auto w-10" />
        </InputGroup>
        <Input
          id="lastName"
          placeholder="Last Name"
          className={
            'border-[#666666] py-[31px] shadow-customInner1 placeholder:text-[#828282]'
          }
          {...register('lastName')}
        />
      </div>
      <InputGroup>
        <Input
          id="email"
          placeholder="Email Address"
          className={
            'border-[#666666] py-[31px] shadow-customInner1 placeholder:text-[#828282]'
          }
          {...register('email', {
            required: 'Enter your email address',
            pattern: {
              // eslint-disable-next-line no-useless-escape
              value: /^[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/i,
              message: 'Please enter a valid email',
            },
          })}
        />
        <Icon_email className="absolute top-0 bottom-0 my-auto w-10" />
      </InputGroup>
    </div>
  )
}

export default UserForm
