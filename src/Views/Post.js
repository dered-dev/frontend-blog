import React, { Component } from 'react'

import PostForm from '../Components/PostForm/'
import api from '../lib/api'

class Post extends Component {
  async onSubmit (post) {
    console.log(post)
    const token = window.sessionStorage.getItem('authorization')
    const response = await api.newPost(token, post.title, post.author, post.image, post.description, post.timeRead, post.category)
    const payload = await response
    console.log(payload)
    // console.log('Nuevo post')
    // console.log(payload.data.newPost)
    // console.log(this.props.history)
    this.props.history.replace('/')
  }

  render () {
    return (
      <PostForm
        onSubmit={this.onSubmit.bind(this)}
      />
    )
  }
}

export default Post
