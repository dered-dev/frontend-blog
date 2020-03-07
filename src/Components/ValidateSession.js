import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ValidateSession extends Component {
  // Method for validate sessionStorage
  validate () {
    const token = window.sessionStorage.getItem('authorization')
    console.log(this.props.location.pathname)
    console.log(this.state)
    if (!token) {
      if (this.props.location.pathname !== '/login') {
        this.props.history.push('/login')
      }
    } else {
      if (this.props.match.path === '/login') {
        this.props.history.push('/')
      }
    }
  }

  componentDidMount () {
    // call validate sessionStorage method
    this.validate()
  }

  componentDidUpdate () {
    // call validate sessionStorage method on update
    this.validate()
  }

  render () {
    return <div />
  }
}
export default withRouter(ValidateSession)
