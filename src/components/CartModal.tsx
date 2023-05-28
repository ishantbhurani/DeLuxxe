import CloseIcon from '../assets/CloseIcon'
import TicketIcon from '../assets/TicketIcon'
import TrashIcon from '../assets/TrashIcon'
import { useAppConfig } from '../hooks/useAppConfig'
import { roundToTwo } from '../utils'

const CartModal = () => {
  const { items, removeFromCart, isCartOpen, closeCart } = useAppConfig()

  const totalPrice = items.reduce((total, item) => total + item.price, 0)
  const tax = roundToTwo(totalPrice * 0.1) // 10% tax
  const discount = roundToTwo(totalPrice * 0.08) // 8% discount
  const grandTotal = totalPrice + tax - discount

  return (
    <section
      className={`fixed z-10 h-full min-h-screen w-full animate-fade bg-black/50 ${
        isCartOpen ? '' : 'hidden'
      }`}
    >
      <aside className='no-scrollbar ms-auto h-full min-h-screen w-full max-w-sm animate-slide overflow-y-auto bg-white'>
        <div className='p-8'>
          <header className='flex items-center justify-between'>
            <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
              Cart
            </h2>
            <button onClick={closeCart}>
              <CloseIcon />
            </button>
          </header>
          <main>
            <div className='mt-8'>
              {items.length < 1 ? (
                <h3 className='text-center text-xl'>Nothing here yet 🫤</h3>
              ) : (
                <>
                  <ul className='space-y-4'>
                    {items.map(product => (
                      <li className='flex items-center gap-4'>
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className='h-16 w-16 rounded object-cover'
                        />

                        <div>
                          <h3 className='text-sm text-gray-900'>
                            {product.title}
                          </h3>

                          <dl className='mt-0.5 space-y-px text-[10px] text-gray-600'>
                            <div>
                              <dt className='inline'>Category:</dt>
                              <dd className='inline'> {product.category}</dd>
                            </div>
                          </dl>
                        </div>

                        <div className='flex flex-1 items-center justify-end gap-2'>
                          <button
                            onClick={() => removeFromCart(product.id)}
                            className='text-gray-600 transition hover:text-red-600'
                          >
                            <span className='sr-only'>Remove item</span>
                            <TrashIcon className='h-4 w-4' />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className='mt-8 flex justify-end border-t border-gray-100 pt-8'>
                    <div className='w-screen max-w-lg space-y-4'>
                      <dl className='space-y-0.5 text-sm text-gray-700'>
                        <div className='flex justify-between'>
                          <dt>Subtotal</dt>
                          <dd>${totalPrice}</dd>
                        </div>

                        <div className='flex justify-between'>
                          <dt>Tax</dt>
                          <dd>${tax}</dd>
                        </div>

                        <div className='flex justify-between'>
                          <dt>Discount</dt>
                          <dd>-${discount}</dd>
                        </div>

                        <div className='flex justify-between !text-base font-medium'>
                          <dt>Total</dt>
                          <dd>${grandTotal}</dd>
                        </div>
                      </dl>

                      <div className='flex justify-end'>
                        <span className='inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700'>
                          <TicketIcon />
                          <p className='whitespace-nowrap text-xs'>
                            2 Discounts Applied
                          </p>
                        </span>
                      </div>

                      <div className='flex justify-end'>
                        <a
                          href='#'
                          className='block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600'
                        >
                          Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </main>
        </div>
      </aside>
    </section>
  )
}
export default CartModal
