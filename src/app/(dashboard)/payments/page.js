import { createServer } from '@/config/supabase/supabaseServer'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'

const PaymentsPage = async () => {
  const currentUser = await getCurrentUser()

  const supabase = createServer()
  const { data: payments } = await supabase
    .from('donations')
    .select('*')
    .eq('donor_email', currentUser?.email)
  return (
    <>
      <div className={'w-full'}>
        <h2 className={'text-xl font-semibold text-primary'}>Payments</h2>
        <div className={'overflow-x-scroll md:overflow-auto'}>
          {payments?.length > 0 ? (
            <table className="table-auto w-full my-6">
              <thead>
                <tr className="text-left bg-primary-300 rounded-full border-b-2 border-primary-400 text-white">
                  <th className="px-3 py-3">Recipient</th>
                  <th className="px-3 py-3">Amount</th>
                  <th className="px-3 py-3">Date</th>
                  <th className="px-3 py-3">Payment ID</th>
                </tr>
              </thead>
              <tbody>
                {payments?.map((payment, index) => {
                  const {
                    amount,
                    first_name,
                    last_name,
                    payment_intent_id,
                    created_at,
                  } = payment
                  return (
                    <tr key={index} className="even:bg-primary-50">
                      <td className={'px-3 py-3'}>
                        {first_name} {last_name}
                      </td>
                      <td className={'px-3 py-3'}>${amount}</td>
                      <td className={'px-3 py-3'}>
                        {new Date(created_at).toLocaleDateString()}
                      </td>
                      <td className={'px-3 py-3'}>{payment_intent_id}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          ) : (
            <div
              className={'rounded-lg p-10 border-[1px] border-neutral-200 my-5'}
            >
              <h2 className={'text-center text-neutral-300'}>
                No Payment Found
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default PaymentsPage
