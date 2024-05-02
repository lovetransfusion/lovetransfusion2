import { NextResponse } from 'next/server'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export const POST = async (request) => {
  const { data } = await request.json()
  const {
    pIntentId,
    donationAmount,
    donorFirstName,
    donorLastName,
    donorEmailAddress,
    description,
  } = data

  console.log({ data })

  console.log('pIntentId', pIntentId)

  const paymentIntent = await stripe.paymentIntents.update(pIntentId, {
    amount: donationAmount * 100,
    currency: 'usd',
    description,
    receipt_email: donorEmailAddress,
    metadata: {
      owner_firstName: donorFirstName,
      owner_lastName: donorLastName,
      owner_email: donorEmailAddress,
    },
  })

  return NextResponse.json({
    clientSecret: paymentIntent.client_secret,
  })
}
