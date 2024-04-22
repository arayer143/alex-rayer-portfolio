import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Alex Rayer Portfolio',
    short_name: 'alexrayer.com',
    description: 'Portfolio for Web Developer Alex Rayer',
    start_url: '/',
    display: 'standalone',
    background_color: '#Black',
    theme_color: '#',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}