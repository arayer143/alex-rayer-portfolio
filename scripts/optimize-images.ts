import sharp from 'sharp'
import path from 'path'
import fs from 'fs/promises'

const STANDARD_WIDTH = 900
const STANDARD_HEIGHT = 450
const QUALITY = 100

async function optimizeProjectImages() {
  const publicDir = path.join(process.cwd(), 'public')
  const outputDir = path.join(process.cwd(), 'public', 'optimized')

  // Create output directory if it doesn't exist
  await fs.mkdir(outputDir, { recursive: true })

  const images = [
    'PNG Transparent Logo.webp',
    'cleanslatelol-whiteBG.webp',
    'outkast-logo.webp',
    'pristinecleanlogo.webp'
  ]

  for (const image of images) {
    const inputPath = path.join(publicDir, image)
    const outputPath = path.join(outputDir, `opt-${image}`)

    await sharp(inputPath)
      .resize({
        width: STANDARD_WIDTH,
        height: STANDARD_HEIGHT,
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath)

    console.log(`Optimized: ${image}`)
  }
}

optimizeProjectImages().catch(console.error)

