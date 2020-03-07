import React, { Component } from 'react'

import LoginForm from '../Components/LoginForm'
import api from '../lib/api'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      authorization: '',
      isErrorLogin: false,
      errorLoginMessage: ''
    }
  }

  componentDidMount () {
    const token = window.sessionStorage.getItem('authorization')
    if (token) this.props.history.replace('/')
  }

  async onLogin (auth) {
    const payload = await api.login(auth.email, auth.password)
    if (payload.data.token !== '') {
      this.setState({
        authorization: payload.data.token
      })
      // redirect to home
      this.props.history.replace('/')
    } else {
      console.log('Error on login')
      console.log(payload)
      this.setState({
        authorization: payload.data.token,
        isErrorLogin: true,
        errorLoginMessage: payload.message
      })
      setTimeout(() => {
        this.setState({
          isErrorLogin: false,
          errorLoginMessage: ''
        })
      }, 4000)
    }
  }

  render () {
    return (
      <div className='app login'>
        <LoginForm
          onSubmit={this.onLogin.bind(this)}
          isErrorLogin={this.state.isErrorLogin}
          errorLoginMessage={this.state.errorLoginMessage}
        />
      </div>
    )
  }
}

export default Login
