import React, { Component } from 'react'

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Navbar from './Components/Navbar/'
import Home from './Views/Home'
import Login from './Views/Login'
import Post from './Views/Post'
import api from './lib/api'
import ValidateSession from './Components/ValidateSession'
import Logout from './Views/Logout'
import PostDetail from './Views/PostDetail'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      authorization: '',
      isErrorLogin: false
    }
  }

  async componentDidMount () {
    const token = window.sessionStorage.getItem('authorization')
    if (token) {
      const payload = await api.validateSession(token)
      console.log(payload)
      this.setState({
        authorization: payload.data.token
      })
    } else {
      this.setState({
        authorization: ''
      })
    }
  }

  render () {
    console.log(this.state)
    return (
      <BrowserRouter>
        <div className='app'>
          {
            this.state.authorization !== '' ? <Navbar /> : ''
          }
          {/* <Navbar /> */}

          <ValidateSession />
          <div className='container'>
            <Switch>

              <Route
                path='/login'
                component={Login}
                exact
              />

              <Route
                path='/'
                component={Home}
                exact
              />
              <Route
                path='/post'
                component={Post}
                exact
              />
              <Route
                path='/logout'
                component={Logout}
                exact
              />
              <Route
                path='/post-detail/:id'
                component={PostDetail}
                exact
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>

    )
  }
}
export default App
