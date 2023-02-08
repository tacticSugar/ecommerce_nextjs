import styles from './ProductCard.module.scss'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay } from 'swiper'
import { useEffect } from 'react'

export default function ProductSwiper({ images }) {
  const swiperRef = useRef(null)
  useEffect(() => {
    swiperRef.current.swiper.autoplay.stop()
  }, [swiperRef])
  return (
    <div
      className={styles.swiper}
      onMouseEnter={() => {
        swiperRef.current.swiper.autoplay.start()
      }}
      onMouseLeave={() => {
        swiperRef.current.swiper.autoplay.stop()
        swiperRef.current.swiper.slideTo(0)
      }}
    >
      <Swiper
        ref={swiperRef}
        centeredSlides={true}
        autoplay={{ delay: 700, stopOnLastSlide: true }}
        speed={500}
        modules={[Autoplay]}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img.url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
