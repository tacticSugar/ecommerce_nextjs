import { Inter } from '@next/font/google'
import axios from 'axios'
import Footer from 'components/Footer/Footer'
import Socials from 'components/Footer/Socials/Socials'
import Header from 'components/Header/Header'
import Home from 'components/pages/home/Home'
import Product from 'models/Product'

import db from 'utils/db'

export default function HomePage({ country, products }) {
  return (
    <>
      <Header country={country} />
      <Home products={products} />
      <Footer country={country} />
    </>
  )
}

export async function getServerSideProps() {
  db.connectDb()
  let products = await Product.find().sort({ createdAt: -1 }).lean()
  // let data = await axios
  //   .get('https://api.ipregistry.co/?key=nut9d9kyd3xrzysn')
  //   .then((res) => {
  //     return res.data.location.country
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      //country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        name: 'Russia',
        flag: 'https://cdn.icon-icons.com/icons2/2087/PNG/512/russia_icon_127851.png',
      },
    },
  }
}
