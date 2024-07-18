import React from 'react'
import TestingApi from './TestingApi'
import axios from 'axios'

const TestingPage = async () => {
  const getConfig = {
    url: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/api/recipients?fields=first_name, gender, hugs, category&id=9255721d-89fe-4bdc-bb34-1fca81b56811`,
  }
  const { data } = await axios(getConfig)
  console.log('data', data)

  // const postConfig = {
  //   url: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/api/recipients`,
  //   method: 'POST',
  //   data: {
  //     id: '9255721d-89fe-4bdc-bb34-1fca81b56811',
  //     comments: [
  //       {
  //         date: '2024-04-08 01:57:48.105+00',
  //         name: 'Carlo',
  //         email: 'cltubigon+240410-37502@gmail.com',
  //         comment:
  //           'Hi beautiful Adley! I love your hat. I’m so happy you are doing so well!',
  //         commentId: '47358b33-312b-4f94-a677-af21a236111e',
  //       },
  //     ],
  //   },
  // }
  // const { data } = await axios(postConfig)
  // console.log('data', data)
  return <div>{/* <TestingApi /> */}</div>
}

export default TestingPage
