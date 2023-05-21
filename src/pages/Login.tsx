import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const Login = () => {
  const { currentUser, loginWithGoogle } = useAuth()

  if (currentUser) return <Navigate to='/' replace />

  return (
    <section>
      <div className='mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
        <Link to='/' className='mb-6 font-display text-3xl font-semibold'>
          <span className='text-[1.7rem] text-primary-500'>De</span>Luxxe
        </Link>
        <div className='w-full max-w-md rounded-lg bg-white shadow md:mt-0 xl:p-0'>
          <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
            <h1 className='font-body text-lg font-medium leading-tight tracking-tight md:text-xl'>
              Sign in to your account
            </h1>
            <button
              type='button'
              onClick={loginWithGoogle}
              className='mx-auto flex w-full items-center justify-center rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-600/50 sm:text-base'
            >
              <svg
                className='-ml-1 mr-3 h-4 w-4'
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='google'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 488 512'
              >
                <path
                  fill='currentColor'
                  d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
                ></path>
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
