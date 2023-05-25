import { Link } from 'react-router-dom'
import StarIcon from '../assets/StarIcon'

interface ProductItemType {
  thumbnail: string
  title: string
  price: number
  rating: number
}

export default function ProductItem({
  thumbnail,
  title,
  price,
  rating,
}: ProductItemType) {
  return (
    <li className='group relative bg-white shadow focus-within:shadow-xl'>
      <Link
        to='#'
        className='block overflow-hidden rounded outline-transparent'
      >
        <div className='overflow-hidden'>
          <img
            src={thumbnail}
            alt={title}
            className='h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]'
          />
        </div>

        <div className='relative flex justify-between gap-4 border-t p-3'>
          <div>
            <h3 className='text-gray-700 group-hover:underline group-hover:underline-offset-4'>
              {title}
            </h3>

            <p className='mt-2'>
              <span className='sr-only'> Regular Price </span>
              <span className='tracking-wider text-gray-900'>${price}</span>
            </p>
          </div>

          <div className='-ms-0.5 mt-0.5 flex'>
            {[...Array(5)].map((_, index) => {
              return (
                <StarIcon
                  key={index}
                  className={
                    index + 1 <= rating ? 'text-yellow-500' : 'text-gray-200'
                  }
                />
              )
            })}
          </div>
        </div>
      </Link>
      <button
        onClick={() => console.log('clicked')}
        className='absolute right-0 top-0 m-3 rounded bg-primary-500 p-2 text-white opacity-0 shadow transition hover:bg-primary-600 group-focus-within:opacity-100 group-hover:opacity-100'
      >
        Add to cart
      </button>
    </li>
  )
}
