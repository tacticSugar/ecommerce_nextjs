import styles from './User.module.scss'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { IoSettingsOutline } from 'react-icons/io5'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { BsHeart } from 'react-icons/bs'
import { AiOutlineMessage } from 'react-icons/ai'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Navigation } from 'swiper'
import { userSwiperArray } from 'data/home'

export default function User() {
  const { data: session } = useSession()
  return (
    <div className={styles.user}>
      <img
        src="../../../images/userHeader.jpg"
        alt=""
        className={styles.user__header}
      />
      <div className={styles.user__container}>
        {session ? (
          <div className={styles.user__infos}>
            <img src={session.user?.image} alt="" />
            <h4>{session.user.name}</h4>
          </div>
        ) : (
          <div className={styles.user__infos}>
            <img
              src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1664642478/992490_b0iqzq.png"
              alt=""
            />
            <div className={styles.user__infos_btns}>
              <button>Register</button>
              <button>Login</button>
            </div>
          </div>
        )}
        <ul className={styles.user__links}>
          <li>
            <Link href="/profile">
              <IoSettingsOutline />
            </Link>
          </li>
          <li>
            <Link href="">
              <HiOutlineClipboardList />
            </Link>
          </li>
          <li>
            <Link href="">
              <AiOutlineMessage />
            </Link>
          </li>
          <li>
            <Link href="">
              <BsHeart />
            </Link>
          </li>
        </ul>
        <div className={styles.user__swiper}>
          <img
            src="https://assets.stickpng.com/images/5a5a6d2414d8c4188e0b088d.png"
            alt=""
            className={styles.new}
          />
          <Swiper
            effect={'cards'}
            grabCursor={true}
            navigation={true}
            modules={[EffectCards, Navigation]}
            className="user_swiper"
            style={{
              maxWidth: '180px',
              height: '240px',
              marginTop: '1rem',
            }}
          >
            {userSwiperArray.map((item, index) => (
              <SwiperSlide key={index}>
                <Link href="">
                  <img src={item.image} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <img
        src="../../../images/userHeader.jpg"
        alt=""
        className={styles.user__footer}
      />
    </div>
  )
}
