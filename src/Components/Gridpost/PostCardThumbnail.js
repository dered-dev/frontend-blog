import React from 'react'
import styles from './index.module.css'

function PostCardThumbnail (props) {
  return (
    <div className={`item__image d-flex ${styles.itemPreviewImage}`}>
      <img src={props.imageUrl} alt={props.title} title={props.title} />
      {/* <span>{props.thumbnail}</span> */}
    </div>
  )
}
export default PostCardThumbnail
