import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  return Response.json({
    MONGODB_URI: process.env.MONGODB_URI ? 'Set' : 'Not set',
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV,
  })
}