import React from 'react'

import NavbarNavItem from './NavbarNavItem'

function NavbarNav (params) {
  return (
    <ul className='navbar-nav mr-auto w-100 justify-content-end'>
      <NavbarNavItem
        text='Home'
        to='/'
        active
      />
      <NavbarNavItem
        text='Logout'
        to='/logout'
      />
      <NavbarNavItem
        extraClass='btn btn__medium btn__outline'
        text='New post'
        to='/post'
      />
    </ul>
  )
}

export default NavbarNav
