import Carousel from '../components/Carousel'
import CartModal from '../components/CartModal'
import ProductList from '../components/ProductList'
import { Header } from '../components/header/Header'

export const Home = () => {
  return (
    <>
      <CartModal />
      <Header />
      <main>
        <Carousel />
        <ProductList />
      </main>
    </>
  )
}
