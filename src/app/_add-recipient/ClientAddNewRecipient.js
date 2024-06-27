'use client'
import React, { useState } from 'react'
import Input from '../components/inputsFields/InputGroup/Input'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import Select_Custom from '../components/inputsFields/Select_Custom'

const ClientAddNewRecipient = () => {
  const { register, handleSubmit, formState, watch } = useForm()
  const { errors } = formState

  const [selectedItem, setselectedItem] = useState([])
  console.log('selectedItem', selectedItem)

  const items = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
  ]

  const onSubmit = (data) => {
    console.log('submitting', data)
  }
  return (
    <div className="py-10">
      <div className={'container md:px-6 lg:px-10 xl:px-0'}>
        <div className={'flex h-[1000px]'}></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="first_name"
            placeholder="First name"
            {...register('first_name', {
              required: 'First name is required',
            })}
            error={errors?.first_name?.message}
          />
          <Input
            id="category"
            placeholder="Category"
            {...register('category', {
              required: 'Category is required',
            })}
            error={errors?.category?.message}
          />
          <Select_Custom
            parameters={{
              options: items,
              selectedItem,
              setselectedItem,
              containerHeight: 132,
              menuStyle: 'rounded-md',
              placeholder: '-- Select Gender --',
            }}
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default ClientAddNewRecipient
