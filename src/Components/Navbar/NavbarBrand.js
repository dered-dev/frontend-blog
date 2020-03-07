import React from 'react'
import LogoBlack from '../../assets/img/Wordmark_Black.png'
import LogoMonogram from '../../assets/img/Monogram.png'

function NavbarBrand () {
  return (
    <a className='navbar-brand' href='/'>
      <img src={LogoBlack} className=' logo__header d-none d-md-block' alt='logo' />
      <img src={LogoMonogram} className=' logo__header d-block d-md-none' alt='logo' />
    </a>
  )
}
export default NavbarBrand
