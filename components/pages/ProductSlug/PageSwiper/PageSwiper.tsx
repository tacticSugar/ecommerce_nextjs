import styles from './PageSwiper.module.scss'
import ReactImageMagnify from 'react-image-magnify'
import { useState } from 'react'

export default function PageSwiper({ images, activeImg }) {
  const [active, setActive] = useState(0)
  return (
    <div className={styles.swiper}>
      <div className={styles.swiper__active}>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: '',
              isFluidWidth: true,
              src: activeImg || images[active].url,
            },
            largeImage: {
              src: activeImg || images[active].url,
              width: 1500,
              height: 2000,
            },
            enlargedImageContainerDimensions: {
              width: '250%',
              height: '150%',
            },
          }}
        />
      </div>
      <div className={styles.swiper__list}>
        {images.map((img, i) => (
          <div
            className={`${styles.swiper__list_item} ${
              i == active && styles.active
            }`}
            key={i}
            onMouseOver={() => setActive(i)}
          >
            <img src={img.url} alt="" key={i} />
          </div>
        ))}
      </div>
    </div>
  )
}
