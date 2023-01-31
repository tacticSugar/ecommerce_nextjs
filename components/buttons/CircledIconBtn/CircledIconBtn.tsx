import { BiRightArrowAlt } from 'react-icons/bi'
import styles from './CircledIconBtn.module.scss'

export default function CircledIconBtn({ type, text }) {
  return (
    <button className={styles.button} type={type}>
      {text}
      <div className={styles.svg__wrap}>
        <BiRightArrowAlt />
      </div>
    </button>
  )
}
