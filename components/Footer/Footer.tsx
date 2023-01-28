import Copyright from './Copyright/Copyright'
import styles from './Footer.module.scss'
import Links from './Links/Links'
import NewsLetter from './NewsLetter/NewsLetter'
import Payment from './Payment/Payment'
import Socials from './Socials/Socials'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Links />
        <Socials />
        <NewsLetter />
        <Payment />
        <Copyright country={country} />
      </div>
    </footer>
  )
}
