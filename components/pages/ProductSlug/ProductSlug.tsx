import styles from './ProductSlug.module.scss'
import Head from 'next/head'
import Header from 'components/Header/Header'
import { useState } from 'react'
import MainSwiper from '../home/main/MainSwiper/MainSwiper'
import Infos from './infos/Infos'
import PageSwiper from './PageSwiper/PageSwiper'
import Reviews from './reviews/Reviews'

export default function ProductSlug({ product, related }) {
  const [activeImg, setActiveImg] = useState('')
  const country = {
    name: 'Morocco',
    flag: 'https://cdn-icons-png.flaticon.com/512/197/197551.png?w=360',
  }
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Header country={country} />
      <div className={styles.product}>
        <div className={styles.product__container}>
          <div className={styles.path}>
            Home / {product.category.name}
            {product.subCategories.map((sub, index) => (
              <span key={index}>/{sub.name}</span>
            ))}
          </div>
          <div className={styles.product__main}>
            <PageSwiper images={product.images} activeImg={activeImg} />
            <Infos product={product} setActiveImg={setActiveImg} />
          </div>
          {/* <Reviews product={product} /> */}
          {/*
          <ProductsSwiper products={related} />
          */}
        </div>
      </div>
    </>
  )
}
