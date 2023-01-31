import styles from './MainHeader.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'

import { FaOpencart } from 'react-icons/fa'

import { useTypedSelector } from 'utils/hooks/useTypedSelector'

export default function MainHeader(/* { searchHandler } */) {
  const router = useRouter()
  const [query, setQuery] = useState(router.query.search || '')
  const { cart } = useTypedSelector((state) => ({ ...state }))
  const handleSearch = (e) => {
    e.preventDefault()
    if (router.pathname !== '/browse') {
      if (query.length > 1) {
        router.push(`/browse?search=${query}`)
      }
    } /* else {
      searchHandler(query)
    } */
  }
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/" className={styles.logo}>
          <img src="../../../logo.png" alt="" />
        </Link>
        <form onSubmit={(e) => handleSearch(e)} className={styles.search}>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className={styles.search__icon}>
            <RiSearch2Line />
          </button>
        </form>
        <Link href="/cart" className={styles.cart}>
          <FaOpencart />
          <span>0</span>
        </Link>
      </div>
    </div>
  )
}
