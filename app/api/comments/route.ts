import { NextRequest } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { MONGODB_URI } from '@/config'

export async function GET(request: NextRequest) {
  if (!MONGODB_URI) {
    return Response.json({ error: 'MongoDB URI is not set' }, { status: 500 })
  }

  try {
    const client = await clientPromise
    const db = client.db("blogcomments")
    const comments = await db.collection('comments').find().toArray()
    return Response.json(comments)
  } catch (error) {
    console.error('Failed to fetch comments:', error)
    return Response.json({ error: 'Failed to fetch comments' }, { status: 500 })
  }
}