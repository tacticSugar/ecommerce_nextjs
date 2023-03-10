import Link from 'next/link'
import styles from './MainHeader.module.scss'

export default function MainHeader() {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link href="">Store</Link>
        </li>
        <li>
          <Link href="">Electronics</Link>
        </li>
        <li>
          <Link href="">Watches</Link>
        </li>
      </ul>
    </div>
  )
}
