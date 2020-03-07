import React, { Component } from 'react'

import AppInput from './AppInput'
import AppButton from './AppButton'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isErrorLogin: false,
      errorLoginMessage: ''
    }
  }

  onChange (event) {
    const { id, value } = event.target
    this.setState({ [id]: value })
  }

  onSubmit (event) {
    event.preventDefault()
    if (this.props.onSubmit) {
      this.props.onSubmit({
        ...this.state
      })
    }
    this.setState({
      email: '',
      password: ''
    })
  }

  render () {
    return (
      <div className='container form__Login'>
        <div className='row  text-center justify-content-center'>
          <form
            onSubmit={this.onSubmit.bind(this)}
            className='col-12 col-md-6 mt-5'
          >
            <h1 className='mt-0 mb-4'>Inicio sesión</h1>
            <AppInput
              id='email'
              type='text'
              label='Email'
              value={this.state.email}
              placeholder='mail@mail.com'
              onChange={this.onChange.bind(this)}
            />
            <AppInput
              id='password'
              type='password'
              label='Contraseña'
              value={this.state.password}
              placeholder='....'
              onChange={this.onChange.bind(this)}
            />

            {
              this.props.isErrorLogin
                ? <p className='bg-danger text-white p-3'>{this.props.errorLoginMessage}</p>
                : ''
            }

            <AppButton
              text='Iniciar sesion'
              type='submit'
              className='btn-primary'
            />

          </form>

        </div>
      </div>
    )
  }
}

export default LoginForm
