import React, { Component } from 'react'
import PostDetailComponent from '../Components/PostDetail'
import AppLoading from '../Components/AppLoading'
import api from '../lib/api'

class PostDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      post: [
        {
          image: 'https://miro.medium.com/max/10944/0*Y2YVUicKVG--SBZZ',
          edit: true,
          view: true,
          description: 'I had naively assumed my experience and obvious company loyalty, both derived from spending over two decades working for the same organization, would make it, if not exactly easy, plausible to find a new job quickly. One which at least came close to matching the salary and benefits of my previous “real” job. It’s not like I hadn’t applied and interviewed for other jobs during those 20 years. I’d held a couple of part-time jobs along the way in addition to my “real” job, and I had been (admittedly, somewhat lazily) seeking a new job during the six months or so preceding my termination.',
          timeRead: '6',
          title: 'How to Deal with the Depressing Reality of the Modern Job Search',
          author: 'Cecil Adkins',
          category: 'cat de prueba',
          dateCreated: '2020-02-10T00:00:00.000+00:00'
        }
      ],
      loading: true
    }
  }

  async componentDidMount () {
    const id = this.props.match.params.id
    const token = window.sessionStorage.getItem('authorization')
    if (token) {
      console.log('Obetenemos el post que requieran')
      const payload = await api.getPost(token, id)
      console.log(payload)
      this.setState({
        post: payload.data.post,
        loading: false
      })
    }
  }

  render () {
    if (this.state.loading) return <AppLoading />
    return (
      <PostDetailComponent
        post={this.state.post}
      />
    )
  }
}

export default PostDetail
