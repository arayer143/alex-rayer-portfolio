import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export async function GET(
  request: NextRequest,
  context: { params: { postId: string } }
) {
  const { postId } = context.params
  const client = await clientPromise
  const db = client.db("blogcomments")
  const comments = await db.collection('comments').find({ postId }).sort({ createdAt: -1 }).toArray()
  return NextResponse.json(comments)
}

export async function POST(
  request: NextRequest,
  context: { params: { postId: string } }
) {
  const { postId } = context.params
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