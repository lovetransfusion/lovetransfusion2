'use client'
import Button from '../../components/Button'
import { TESTING_BUCKETS } from '../../lib/buckets'
import { useRouter } from 'next/navigation'
import { removeBucket, setBucket } from './actions'

const ClientTestingPage = () => {
  const router = useRouter()
  const setMyBucket = async (bucket) => {
    await setBucket(bucket)
    router.refresh()
  }

  const removeMyBucket = async () => {
    await removeBucket()
    router.refresh()
  }

  return (
    <div>
      <div className={'flex gap-3'}>
        {TESTING_BUCKETS.map((item, index) => {
          return (
            <Button key={index} onClick={() => setMyBucket(item)}>
              {item}
            </Button>
          )
        })}
        <Button onClick={removeMyBucket}>Remove bucket</Button>
      </div>
    </div>
  )
}

export default ClientTestingPage
