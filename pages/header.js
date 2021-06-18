import React, { useState } from 'react'
import MenuMobile from '../menu/mobile'

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mensageOpen, setMensageOpen] = useState(false)
  const [toggleSideMenu, setToggleSideMenu] = useState(false)

  return (
    <header className='z-40 py-4  bg-gray-800  '>
      <div className='flex items-center justify-between h-8 px-6 mx-auto'>
        <button className='p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple'
            onClick={() => setToggleSideMenu(old => !old)} aria-label='Menu'>
            <x-heroicon-o-menu className='w-6 h-6 text-white' />
          <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-white' fill='none'
              viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7' />
          </svg>
        </button>
        {toggleSideMenu && 
          <MenuMobile />
        }
        <div></div>

        <ul className='flex items-center flex-shrink-0 space-x-6'>
          <li className='relative'>
            <button
                className=
                  'p-2 bg-white text-green-400 align-middle rounded-full hover:text-white hover:bg-green-400 focus:outline-none '
                onClick={() => setMensageOpen(old => !old)}
                aria-label='Notifications' aria-haspopup='true'>
              <div className='flex items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none'
                    viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                      d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' />
                </svg>
              </div>
              <span aria-hidden='true'
                  className='absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800'></span>
            </button>
            {mensageOpen && 
              (
                <ul 
                    className='absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-green-400 border border-green-500 rounded-md shadow-md'>
                  <li className='flex'>
                    <a className='text-white inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800'
                        href='#'>
                      <span>Messages</span>
                      <span
                          className='inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600'>
                          13
                      </span>
                    </a>
                  </li>
                </ul>
              )
            }
          </li>
          <li className='relative'>
            <button
                className='p-2 bg-white text-green-400 align-middle rounded-full hover:text-white hover:bg-green-400 focus:outline-none '
                onClick={() => setDropdownOpen(old => !old)} aria-label='Account'
                aria-haspopup='true'>
              <div className='flex items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none'
                    viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                      d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
              </div>
            </button>
            {dropdownOpen && 
              (
                <ul 
                    click='closeProfileMenu' 
                    className='absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-green-400 border border-green-500 rounded-md shadow-md'
                    aria-label='submenu'>
                  <li className='flex'>
                    <a className=' text-white inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800'
                        href='#'>
                      <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 mr-2' fill='none'
                          viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                              d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <span>Profile</span>
                    </a>
                  </li>
                  <li className='flex'>
                    <a className='text-white inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800'
                        href='#'>
                      <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 mr-2' fill='none'
                          viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                              d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
                      </svg>
                        <span>Log out</span>
                    </a>
                  </li>
                </ul>
              )
            }
          </li>
        </ul>
      </div>
  </header>
  )
}
export default Header