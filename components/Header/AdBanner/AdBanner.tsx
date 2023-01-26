import Link from 'next/link'
import styles from './AdBanner.module.scss'

export default function AdBanner() {
  return (
    <Link href="/browse">
      <div className={styles.ad}></div>
    </Link>
  )
}
