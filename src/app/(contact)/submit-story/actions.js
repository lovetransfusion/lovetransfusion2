'use server'

import axios from 'axios'

export const submitStory = async ({ formData: data, images }) => {
  const firstName = data?.fullName?.split(' ')[0]
  const lastName = data?.fullName?.split(' ')[1]
  const lastName2 = data?.fullName?.split(' ')[2]
  const lastName3 = data?.fullName?.split(' ')[3]
  const combinedLastName = `${lastName || ''} ${lastName2 || ''} ${
    lastName3 || ''
  }`

  const body = {
    contact: {
      email: data?.email,
      firstName: firstName,
      lastName: combinedLastName,
      fieldValues: [
        { field: '1', value: data.fullName },
        { field: '2', value: data?.otherPages },
        { field: '3', value: data?.recipientInterests },
        { field: '4', value: data?.recipientName },
        { field: '5', value: images },
        { field: '6', value: data?.recipientSituation },
        { field: '7', value: data?.relationship },
      ],
    },
  }

  try {
    const response = await axios.post(
      'https://lovetransfusion.api-us1.com/api/3/contacts',
      body,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Api-Token': process.env.ACTIVE_CAMPAIGN_API_KEY,
        },
      }
    )

    if (response.data?.contact) {
      const contactId = response.data?.contact?.id
      await addToList(contactId)
      return { data: response.data?.contact, error: null }
    } else if (response.data?.errors) {
      return { data: null, error: 'Email address already exist' }
    }
  } catch (error) {
    console.log('Error submitting story:', error)
    const theError =
      error?.response?.status === 422
        ? 'Email address already exist'
        : 'An error occured'
    return { data: null, error: theError }
  }
}

// ************ RETRIEVE ALL FIELDS ************
export const retrieveFields = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'Api-Token': `${process.env.ACTIVE_CAMPAIGN_API_KEY}`,
    },
  }

  fetch('https://lovetransfusion.api-us1.com/api/3/fields?limit=100', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
}

// ************ RETRIEVE ALL LISTS ************
export const retrieveLists = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'Api-Token': `${process.env.ACTIVE_CAMPAIGN_API_KEY}`,
    },
  }

  await fetch('https://lovetransfusion.api-us1.com/api/3/lists', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
}

// ************ ADD TO SPECIFIC LIST ************
const addToList = async (contactId) => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'Api-Token': `${process.env.ACTIVE_CAMPAIGN_API_KEY}`,
    },
    body: JSON.stringify({
      contactList: { list: '2', contact: contactId, status: '1' },
    }),
  }

  await fetch('https://lovetransfusion.api-us1.com/api/3/contactLists', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
}
