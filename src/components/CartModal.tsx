import CloseIcon from '../assets/CloseIcon'
import { useAppConfig } from '../hooks/useAppConfig'

const CartModal = () => {
  const { isCartOpen, closeCart } = useAppConfig()
  return (
    <section
      className={`fixed z-10 h-full min-h-screen w-full animate-fade bg-black/50 ${
        isCartOpen ? '' : 'hidden'
      }`}
    >
      <aside className='ms-auto h-full min-h-screen w-full max-w-sm animate-slide bg-white'>
        <div className='p-8'>
          <header className='flex items-center justify-between'>
            <h2 className='text-2xl'>Cart</h2>
            <button onClick={closeCart}>
              <CloseIcon />
            </button>
          </header>
        </div>
      </aside>
    </section>
  )
}
export default CartModal
