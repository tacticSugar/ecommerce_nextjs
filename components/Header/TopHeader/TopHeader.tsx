import styles from './TopHeader.module.scss'
import { MdSecurity } from 'react-icons/md'
import { BsSuitHeart } from 'react-icons/bs'
import { RiAccountPinCircleLine, RiArrowDropDownFill } from 'react-icons/ri'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import UserMenu from '../UserMenu/UserMenu'

export default function TopHeader() {
  const [visible, setVisible] = useState(false)

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <Image
              src={'/public/images/Flag_of_Russia.png'}
              alt="flag"
              width={28}
              height={28}
            />
            <span>Russia / USD</span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <span>Customer Service</span>
          </li>
          <li className={styles.li}>
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href="/profile/whishlist">
              <span>Whishlist</span>
            </Link>
          </li>
          {/* <li> */}
          {/* {session ? ( */}
          {/* <li className={styles.li}>
                <div className={styles.flex}>
                  <Image src={session?.user?.image} alt="" />
                  <span>{session?.user?.name}</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : ( */}
          <li className={styles.li}>
            <div className={styles.flex}>
              <RiAccountPinCircleLine />
              <span>Account</span>
              <RiArrowDropDownFill />
            </div>
          </li>
          <UserMenu />
          {/* )} */}
          {/* {visible && <UserMenu session={session} />} */}
          {/* </li> */}
        </ul>
      </div>
    </div>
  )
}
