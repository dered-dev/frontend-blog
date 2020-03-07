import React from 'react'
import styles from './index.module.css'
function PostCardBody (props) {
  console.log(props)
  return (
    <div className={`left mr-3 d-flex flex-column ${styles.itemPreviewDesc}`}>
      <span className={styles.itemPreviewCategory}>{props.category}</span>
      <h2 className={styles.titleItem}>{props.title}</h2>
      <span className={styles.itemDescription}>{props.text}</span>
      {/* <div className='d-flex justify-content-between align-items-center'>
        {props.children}
        <small className='text-muted'>{props.readTime}</small>
      </div> */}
      <div className='d-flex justify-content-between'>
        <div className={`mt-3 mr-2 ${styles.ellipsisText}`}>
          <p className={`${styles.ellipsisText} ${styles.itemPreviewText}`}>
            <span className={styles.itemPreviewAutor}>{props.author}</span> in <span className={styles.itemPreviewGroup}>koders</span>
          </p>
          <p className={`${styles.ellipsisText} ${styles.itemPreviewText}`}>
            <span className={styles.itemPreviewTimeago}>2020/01/16</span> .
            <span className='read'>{props.readTime}</span>
            <span className={`icon-star1 ${styles.itemPreviewIcon}`} />
          </p>

        </div>
        <div className='mt-3 ml-2'>
          <span className='icon-bookmark-o' />
          <span className='icon-navigation-more d-none d-md-inline-block' />
        </div>
      </div>
    </div>
  )
}
export default PostCardBody
