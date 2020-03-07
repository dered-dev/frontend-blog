import React, { Component } from 'react'

import PostList from '../Components/PostList'
import AppLoading from '../Components/AppLoading'
import api from '../lib/api'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [
        {
          id: 'Post chido',
          imageUrl: 'https://picsum.photos/400/200',
          edit: true,
          view: true,
          description: 'lorem ipsum dolot sir amet',
          timeRead: '10m',
          title: 'Titulo de prueba',
          category: 'cat de prueba'
        },
        {
          id: 'Post chido 2',
          imageUrl: 'https://picsum.photos/400/200',
          edit: false,
          view: true,
          description: 'lorem ipsum dolot sir amet',
          timeRead: '10m',
          title: 'Titulo de prueba 2',
          category: 'cat de prueba 2'
        }
      ],
      loading: true
    }
  }

  async componentDidMount () {
    const token = window.sessionStorage.getItem('authorization')
    if (token) {
      const payload = await api.getPosts(token)
      console.log(payload)
      this.setState({
        posts: payload.data.allPosts,
        loading: false
      })
    }
  }

  componentDidUpdate () {
    console.log('cuando ya se actualizó el componente')
  }

  componentWillDestroy () {
    console.log('Se murió componente')
  }

  render () {
    if (this.state.loading) return <AppLoading />
    return (
      <PostList
        list={this.state.posts}
      />
    )
  }
}

export default Home
