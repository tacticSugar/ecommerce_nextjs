import styles from './Main.module.scss'
import MainSwiper from './MainSwiper'
import Offers from './Offers'
import { useSession } from 'next-auth/react'
import Menu from './Menu'
import Link from 'next/link'
import { IoSettingsOutline } from 'react-icons/io5'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { AiOutlineMessage } from 'react-icons/ai'
import { BsHeart } from 'react-icons/bs'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards, Navigation } from 'swiper'
import User from './User'
import MainHeader from './MainHeader'

export default function Main() {
  const { data: session } = useSession()
  return (
    <div className={styles.main}>
      <MainHeader />
      <Menu />
      <MainSwiper />
      <Offers />
      <User />
    </div>
  )
}
