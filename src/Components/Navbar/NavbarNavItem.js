import React from 'react'
// navigation con props.history
import { Link } from 'react-router-dom'

function NavbarItem (props) {
  console.log(props.text)
  return (
    <li className='nav-item'>
      <Link
        className={`nav-link ${props.extraClass}`}
        to={props.to}
      >
        {props.text}
      </Link>
    </li>
  )
}
export default NavbarItem
