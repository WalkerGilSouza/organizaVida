import React, { useState } from 'react'
import Header from './header'
import Menu from '../menu'
import MenuMobile from '../menu'
import Main from '../mainComponents/main'

const Index = () => {

  return (
    <div>
      <div className='flex h-screen bg-gray-800'>
        <Menu />
        <div className='flex flex-col flex-1 w-full overflow-y-auto'>
          <Header />
          <Main />
        </div>        
      </div>
    </div>
    
  )
}
export default Index