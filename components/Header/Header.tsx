import styles from './Header.module.scss'

import AdBanner from './AdBanner/AdBanner'
import MainHeader from './MainHeader/MainHeader'
import TopHeader from './TopHeader/TopHeader'

export default function Header({ country /* searchHandler */ }) {
  return (
    <header className={styles.header}>
      <AdBanner></AdBanner>
      <TopHeader country={country}></TopHeader>
      <MainHeader />
    </header>
  )
}
