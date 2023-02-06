import styles from './HomePage.module.scss'
import Category from './category/Category'
import FlashDeals from './flashDeals/FlashDeals'
import Main from './main/Main'
import { useSession } from 'next-auth/react'

export default function HomePage(
  {
    /* products */
  }
) {
  const { data: session } = useSession()
  // const isMedium = useMediaQuery({ query: '(max-width:850px)' })
  // const isMobile = useMediaQuery({ query: '(max-width:550px)' })

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Main />
        {/* <FlashDeals />
        <div className={styles.home__category}>
          <Category
            header="Dresses"
            products={women_dresses}
            background="#5a31f4"
          />
          {!isMedium && (
            <Category
              header="Shoes"
              products={women_shoes}
              background="#3c811f"
            />
          )}
          {isMobile && (
            <Category
              header="Shoes"
              products={women_shoes}
              background="#3c811f"
            />
          )}
          <Category
            header="Accessories"
            products={women_accessories}
            background="#000"
          />
        </div>
        <ProductsSwiper products={women_swiper} />
        <div className={styles.products}>
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div> */}
      </div>
    </div>
  )
}
