import { createServer } from '@/config/supabase/supabaseServer'
import { NextResponse } from 'next/server'

export async function GET(req) {
  const url = new URL(req.url)
  const searchParams = new URLSearchParams(url.searchParams)
  const id = searchParams.get('id')
  const fields = searchParams.get('fields')
  console.log('id', id)
  if (id) {
    const supabase = createServer()
    const { data, error } = await supabase
      .from('recipients')
      .select(fields)
      .eq('id', id)
    return NextResponse.json({ recipient: data, error })
  } else {
    const supabase = createServer()
    const { data, error } = await supabase.from('recipients').select(fields)
    return NextResponse.json({ recipients: data, error })
  }
}

export async function POST(req) {
  const supabase = createServer()
  const body = await req.json()

  if (!body?.id) {
    return NextResponse.json({
      data: null,
      error: `Recipient's "id" is required in your request`,
    })
  } else if (body?.hugs) {
    const { data, error } = await supabase
      .from('recipients')
      .update({ hugs: body?.hugs })
      .select()
      .eq('id', body?.id)
    return NextResponse.json({ data, error: error })
  } else if (body?.comments) {
    const { data, error } = await supabase
      .from('recipients')
      .update({ comments: body?.comments })
      .select()
      .eq('id', body?.id)
    return NextResponse.json({ data, error: error })
  }
}

export async function HEAD(req) {}

export async function PUT(req) {}

export async function DELETE(req) {}
