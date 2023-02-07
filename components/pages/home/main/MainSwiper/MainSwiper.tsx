import styles from './MainSwiper.module.scss'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'

export default function MainSwiper() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 20000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={`${styles.main_swiper} main_swiper`}
    >
      {[...Array(9).keys()].map((i) => (
        <SwiperSlide key={i}>
          <img src={`/images/swiper/${i + 1}.jpg`} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
