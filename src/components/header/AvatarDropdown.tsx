import Logout from '../../assets/LogoutIcon'
import { Avatar } from './Avatar'

interface AvatarType {
  photoURL: string
  username?: string
  logout: () => void
}

export const AvatarDropdown = ({ photoURL, username, logout }: AvatarType) => (
  <div className='group relative flex'>
    <Avatar photoURL={photoURL} username={username} />
    <ul className='absolute -right-0 top-8 z-10 hidden list-none overflow-hidden rounded border bg-white shadow-lg group-hover:block'>
      <li>
        <button
          onClick={logout}
          className='flex w-full items-center gap-2 bg-transparent px-4 py-2 font-body text-sm hover:bg-neutral-100'
        >
          <Logout />
          Logout
        </button>
      </li>
    </ul>
  </div>
)
