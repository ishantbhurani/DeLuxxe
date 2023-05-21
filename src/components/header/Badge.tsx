import { ReactNode } from 'react'

interface BadgeType {
  children: ReactNode
  badgeContent: number
}

const Badge = ({ children, badgeContent }: BadgeType) => {
  return (
    <div className='relative'>
      {children}
      <span className='sr-only'>Cart</span>
      {badgeContent > 0 && (
        <span className='absolute -bottom-2 -right-2 inline-flex h-5 w-5 select-none items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white'>
          {badgeContent}
        </span>
      )}
    </div>
  )
}
export default Badge
