import React, { Component } from 'react'

import NavbarToggler from './NavbarToggler'
import NavbarBrand from './NavbarBrand'
import NavbarCollapse from './NavbarCollapse'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }

  toggleNavBar () {
    this.setState({
      active: !this.state.active
    })
  }

  render () {
    return (
      <nav className='navbar navbar-expand-md navbar-light fixed-top bg-white d-flex justify-content-between '>
        <div className='container'>
          <NavbarBrand />
          <NavbarToggler onClick={this.toggleNavBar.bind(this)} />
          <NavbarCollapse active={this.state.active} />
        </div>
      </nav>
    )
  }
}

export default Navbar
