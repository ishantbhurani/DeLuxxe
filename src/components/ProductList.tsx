import { useEffect, useState } from 'react'
import ProductItem from './ProductItem'

export default function ProductList() {
  const [products, setProducts] = useState<ItemType[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('https://dummyjson.com/products')
      const { products } = await res.json()
      setProducts(products)
    }
    fetchProducts()
  }, [])

  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <header className='text-center'>
          <h2 className='font-display text-xl font-bold text-gray-900 sm:text-3xl'>
            <span className='text-primary-500'>Product</span> Collection
          </h2>
        </header>

        <ul className='mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  )
}
