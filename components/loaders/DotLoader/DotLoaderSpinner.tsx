import styles from './DotLoaderSpinner.module.scss'
import DotLoader from 'react-spinners/DotLoader'

export default function DotLoaderSpinner({ loading }) {
  return (
    <div className={styles.loader}>
      <DotLoader color="#2f82ff" loading={loading} />
    </div>
  )
}
