import React, { Component } from 'react'

import AppInput from '../AppInput'
import AppTextArea from '../AppTextArea'
import AppButton from '../AppButton'
import styles from './index.module.css'

class PostForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      description: '',
      dateCreated: new Date(),
      image: '',
      category: ''
    }
  }

  get timeRead () {
    return this.state.description.length * 60
  }

  onChange (event) {
    const { id, value } = event.target
    this.setState({ [id]: value })
  }

  onSubmit (event) {
    event.preventDefault()
    if (this.props.onSubmit) {
      this.props.onSubmit({
        ...this.state,
        timeRead: this.timeRead
      })
    }
    console.log(this.state)
    this.setState({
      title: '',
      author: '',
      description: '',
      dateCreated: new Date(),
      image: '',
      category: ''
    })
  }

  render () {
    console.log(styles)
    return (
      <div className={`container mt-5 ${styles.formPost}`}>
        <div className='row mt-5'>
          <form
            onSubmit={this.onSubmit.bind(this)}
            className='col-12 col-md-6 mt-5'
          >
            <AppInput
              id='title'
              type='text'
              label='Title post'
              ariaDescribedBy='title__help'
              value={this.state.title}
              onChange={this.onChange.bind(this)}
            >
              <small id='title__help' className='form-text text-muted'>Help for title post</small>
            </AppInput>
            <AppInput
              id='author'
              type='text'
              label='Author'
              value={this.state.author}
              ariaDescribedBy='postAuthor__help'
              onChange={this.onChange.bind(this)}
            >
              <small id='postAuthor__help' className='form-text text-muted'>Help for author</small>
            </AppInput>
            <AppInput
              id='category'
              type='text'
              label='category'
              value={this.state.category}
              ariaDescribedBy='postCategory__help'
              onChange={this.onChange.bind(this)}
            >
              <small id='postCategory__help' className='form-text text-muted'>Help for category</small>
            </AppInput>

            <AppInput
              id='image'
              type='text'
              label='Url image'
              ariaDescribedBy='imageurl__help'
              value={this.state.image}
              onChange={this.onChange.bind(this)}
            >
              <small id='imageurl__help' className='form-text text-muted'>Help for URL image</small>
            </AppInput>

            <AppTextArea
              id='description'
              label='Description'
              rows='3'
              value={this.state.description}
              onChange={this.onChange.bind(this)}
            />
            <AppButton
              text='Guardar'
              type='submit'
              className='btn-primary'
            />
          </form>
          <div className='col-6 wrap__imagePost mt-5'>

            {
              this.state.image ? (
                <img
                  src={this.state.image}
                  alt=''
                  className='rounded shadow-lg'
                />
              ) : ':('
            }

          </div>
        </div>
      </div>
    )
  }
}

export default PostForm
