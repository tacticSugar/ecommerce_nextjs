import Link from 'next/Link'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import { simillar_products } from 'data/products'

export default function SimillarSwiper() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={5}
      slidesPerGroup={3}
      navigation={true}
      modules={[Navigation]}
      className="swiper simillar_swiper products__swiper"
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 5,
        },
      }}
    >
      {simillar_products.map((p, index) => (
        <SwiperSlide key={index}>
          <Link href="">
            <img src={p} alt="" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
