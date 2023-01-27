import styles from './Header.module.scss'

import AdBanner from './AdBanner/AdBanner'
import MainHeader from './MainHeader/MainHeader'
import TopHeader from './TopHeader/TopHeader'

export default function Header() {
  return (
    <header className={styles.header}>
      <AdBanner></AdBanner>
      <TopHeader></TopHeader>
      <MainHeader />
    </header>
  )
}
