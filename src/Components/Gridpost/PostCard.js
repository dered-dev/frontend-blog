import React from 'react'
import PostCardThumbnail from './PostCardThumbnail'
import PostCardBody from './PostCardBody'
import styles from './index.module.css'

function PostCard (props) {
  return (
    <div className={`d-flex justify-content-between w-100 ${styles.itemPreview}`}>
      <PostCardBody
        text={props.text}
        readTime={props.readTime}
        children={props.children}
        title={props.title}
        author={props.author}
        category={props.category}
      />
      <PostCardThumbnail
        title={props.title}
        thumbnail={props.thumbnail}
        imageUrl={props.imageUrl}
      />
    </div>
  )
}

export default PostCard
