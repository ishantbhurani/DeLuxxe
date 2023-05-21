import { Link } from 'react-router-dom'

import { useAppConfig } from '../../hooks/useAppConfig'
import { useAuth } from '../../hooks/useAuth'

import { AvatarDropdown } from './AvatarDropdown'
import { Avatar } from './Avatar'
import Badge from './Badge'

import defaultAvatar from '../../assets/default.svg'
import ShoppingBag from '../../assets/ShoppingBag'

export const Header = () => {
  const { currentUser, logout } = useAuth()
  const { items, openCart } = useAppConfig()

  return (
    <header className='container mx-auto flex items-center justify-between p-4'>
      <h1>
        <Link to='/' className='font-display text-2xl font-semibold'>
          <span className='text-[22px] text-primary-500'>De</span>Luxxe
        </Link>
      </h1>
      <nav>
        <ul className='flex items-center gap-6'>
          <li>
            <button onClick={openCart}>
              <Badge badgeContent={items.length}>
                <ShoppingBag />
              </Badge>
            </button>
          </li>
          {currentUser ? (
            <>
              <li>
                <AvatarDropdown
                  photoURL={currentUser.photoURL || defaultAvatar}
                  username={currentUser.displayName || 'User'}
                  logout={logout}
                />
              </li>
            </>
          ) : (
            <li>
              <Link title='Login' aria-label='Go to login page' to='login'>
                <Avatar photoURL={defaultAvatar} />
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
