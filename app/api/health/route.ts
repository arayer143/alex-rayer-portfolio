import { NextRequest } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise
    await client.db("blogcomments").command({ ping: 1 })
    
    return Response.json(
      { 
        status: 'ok', 
        message: 'MongoDB connected',
        timestamp: new Date().toISOString()
      }
    )
  } catch (error) {
    console.error('MongoDB Health Check Error:', error)
    
    return Response.json(
      { 
        status: 'error', 
        message: 'MongoDB connection failed',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}