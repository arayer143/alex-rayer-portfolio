import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET(request: Request, { params }: { params: { postId: string } }) {
  const { postId } = params
  const client = await clientPromise
  const db = client.db("blogcomments")
  const comments = await db.collection('comments').find({ postId }).toArray()
  return NextResponse.json(comments)
}

export async function POST(request: Request, { params }: { params: { postId: string } }) {
  const { postId } = params
  const { author, text } = await request.json()
  const client = await clientPromise
  const db = client.db("blogcomments")
  const result = await db.collection('comments').insertOne({
    postId,
    author,
    text,
    createdAt: new Date()
  })
  return NextResponse.json(result)
}