import styles from './Payment.module.scss'
import img from 'next/image'

export default function Payment() {
  return (
    <div className={styles.payment}>
      <h3>WE ACCPET</h3>
      <div className={styles.flexwrap}>
        <img src="../../../images/payment/visa.webp" alt="" />
        <img src="../../../images/payment/mastercard.webp" alt="" />
        <img src="../../../images/payment/paypal.webp" alt="" />
      </div>
    </div>
  )
}
