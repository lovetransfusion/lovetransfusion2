'use client'
import React, { useEffect, useState } from 'react'
import Heart from './Heart'
import { createClient } from '@/config/supabase/supabaseClient'
import HeartFallback from './HeartFallback'
import Comments from './Comments'
import CommentForm from './CommentForm'
import CommentsFallback from './CommentsFallback'

const CommentAndHeartContainer = ({ id }) => {
  const [recipient, setrecipient] = useState(null)
  const [comments, setcomments] = useState(null)

  const supabase = createClient()

  const fetchComments = async () => {
    const { data: recipient, error: readError } = await supabase
      .from('oldRecipients')
      .select()
      .eq('id', id)
    if (recipient) {
      setrecipient(recipient[0])
    }
  }

  useEffect(() => {
    fetchComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setcomments(recipient?.comment)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipient])
  return (
    <>
      {recipient ? <Heart parameters={{ recipient, id }} /> : <HeartFallback />}
      <CommentForm parameters={{ comments, setcomments, id }} />
      {comments ? <Comments parameters={{ comments }} /> : <CommentsFallback />}
    </>
  )
}

export default CommentAndHeartContainer
