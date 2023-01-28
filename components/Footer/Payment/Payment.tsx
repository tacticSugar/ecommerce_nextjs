import styles from './Payment.module.scss'
import Image from 'next/image'

export default function Payment() {
  return (
    <div className={styles.payment}>
      <h3>WE ACCPET</h3>
      <div className={styles.flexwrap}>
        <Image src="../../../images/payment/visa.webp" alt="" />
        <Image src="../../../images/payment/mastercard.webp" alt="" />
        <Image src="../../../images/payment/paypal.webp" alt="" />
      </div>
    </div>
  )
}
