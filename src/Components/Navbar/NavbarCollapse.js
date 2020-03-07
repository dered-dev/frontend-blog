import React from 'react'

import NavbarNav from './NavbarNav'
// import NavbarFormSearch from './NavbarFormSearch'

function NavbarCollapse (props) {
  const styles = ['collapse', 'navbar-collapse']
  if (props.active) styles.push('show')

  const className = styles.join(' ')

  return (
    <div className={`${className} justify-content-end`}>
      <NavbarNav />
    </div>
  )
}

export default NavbarCollapse
