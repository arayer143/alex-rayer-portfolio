'use server'

import clientPromise from '@/lib/mongodb'
import { revalidatePath } from 'next/cache'
import type { Document } from 'mongodb'

export interface Comment {
  _id: string
  postId: string
  author: string
  text: string
  createdAt: string
}

export interface CommentsResponse {
  comments?: Comment[]
  error?: string
}

export interface CommentResponse {
  comment?: Comment
  error?: string
}

interface MongoComment extends Document {
  postId: string
  author: string
  text: string
  createdAt: Date
}

export async function getComments(postId: string): Promise<CommentsResponse> {
  try {
    const client = await clientPromise
    const db = client.db("blogcomments")
    
    const comments = await db
      .collection<MongoComment>('comments')
      .find({ postId })
      .sort({ createdAt: -1 })
      .toArray()

    const formattedComments = comments.map(comment => ({
      _id: comment._id.toString(),
      postId: comment.postId,
      author: comment.author,
      text: comment.text,
      createdAt: new Date(comment.createdAt).toISOString()
    }))

    return { comments: formattedComments }
  } catch (error) {
    console.error('Error fetching comments:', error)
    return { error: 'Failed to fetch comments' }
  }
}

export async function addComment(
  postId: string,
  author: string,
  text: string
): Promise<CommentResponse> {
  try {
    const client = await clientPromise
    const db = client.db("blogcomments")

    const newComment = {
      postId,
      author,
      text,
      createdAt: new Date()
    }

    const result = await db.collection('comments').insertOne(newComment)

    const comment = {
      ...newComment,
      _id: result.insertedId.toString(),
      createdAt: newComment.createdAt.toISOString()
    }

    revalidatePath(`/blog/${postId}`)

    return { comment }
  } catch (error) {
    console.error('Error adding comment:', error)
    return { error: 'Failed to add comment' }
  }
}