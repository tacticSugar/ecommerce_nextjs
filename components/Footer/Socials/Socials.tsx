import styles from './Socials.module.scss'
import { FaFacebookF, FaTiktok } from 'react-icons/fa'
import {
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsPinterest,
  BsSnapchat,
} from 'react-icons/bs'

// const socials = [
//   { href: '/', icon: <FaFacebookF /> },
//   { href: '/', icon: <BsInstagram /> },
//   { href: '/', icon: <BsTwitter /> },
//   { href: '/', icon: <BsYoutube /> },
//   { href: '/', icon: <BsPinterest /> },
//   { href: '/', icon: <BsSnapchat /> },
//   { href: '/', icon: <FaTiktok /> },
// ]

export default function Socials() {
  return (
    <div className={styles.socials}>
      <section>
        <h3>STAY CONNECTED</h3>
        <ul>
          <li>
            <a href="/" target="_blank">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <BsYoutube />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <BsPinterest />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <BsSnapchat />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <FaTiktok />
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
