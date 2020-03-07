import React from 'react'

function NavbarToggler (props) {
  return (
    <button
      onClick={props.onClick}
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarsExampleDefault'
      aria-controls='navbarsExampleDefault'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-icon' />
    </button>
  )
}
export default NavbarToggler
