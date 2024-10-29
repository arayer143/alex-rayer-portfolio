import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'


type RouteParams = { params: { postId: string } }

export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  const { postId } = params
  const client = await clientPromise
  const db = client.db("blogcomments")
  const comments = await db.collection('comments').find({ postId }).sort({ createdAt: -1 }).toArray()
  return NextResponse.json(comments)
}

export async function POST(
  request: NextRequest,
  { params }: RouteParams
) {
  const { postId } = params
  const { author, text } = await request.json()
  const client = await clientPromise
  const db = client.db("blogcomments")
  const newComment = {
    postId,
    author,
    text,
    createdAt: new Date()
  }
  const result = await db.collection('comments').insertOne(newComment)
  const insertedComment = {
    ...newComment,
    _id: result.insertedId.toString()
  }
  return NextResponse.json(insertedComment)
}