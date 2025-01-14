import React from 'react'
import styles from './SpaceBackground.module.css'

const StarBackground: React.FC = () => {
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    opacity: Math.random() * 0.7 + 0.3,
  }))

  return (
    <div className={`absolute inset-0 ${styles.backgroundGradient}`}>
      {stars.map((star) => (
        <div
          key={star.id}
          className={styles.star}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default StarBackground

