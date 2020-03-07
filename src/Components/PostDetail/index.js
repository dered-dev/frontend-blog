
import React from 'react'

// styles
import styles from './index.module.css'

function InteriorPost (props) {
  console.log(props)
  const post = props.post
  return (
    <section className='container mt-5'>
      <div className='row'>
        <article className={`mt-5 ${styles.containerPost}`}>
          <h1 className={styles.titlePost}>{post.title}</h1>
          <p className={styles.subtitlePost}>Subtitle Like many new job-seekers, I was not prepared for this</p>
          <div className={` d-flex ${styles.wrapInfoAuthor}`}>
            <div className={styles.wrapAvatar}>
              <svg className={styles.svgAvatar} width='57' height='57' viewBox='0 0 57 57'><path fill='#03a87c' fill-rule='evenodd' clip-rule='evenodd' d='M28.5 1.2A27.45 27.45 0 0 0 4.06 15.82L3 15.27A28.65 28.65 0 0 1 28.5 0C39.64 0 49.29 6.2 54 15.27l-1.06.55A27.45 27.45 0 0 0 28.5 1.2zM4.06 41.18A27.45 27.45 0 0 0 28.5 55.8a27.45 27.45 0 0 0 24.44-14.62l1.06.55A28.65 28.65 0 0 1 28.5 57 28.65 28.65 0 0 1 3 41.73l1.06-.55z' /></svg>
              <img src='https://miro.medium.com/fit/c/96/96/1*3mQMTxb-Vene5XAqWVt1uA@2x.jpeg' alt='' className={styles.AvatarImg} />
            </div>
            <div className={`d-flex align-items-center ${styles.InfoAuthor}`}>
              <div className={`${styles.userAuthor}`}>
                <span className={`d-flex  ${styles.nameAuthor} mb-1`}>{post.author} <button type='button' className={`btn btn__medium btn__outline ml-3 ${styles.smallButton}`}>Follow</button></span>
                <span className='d-flex align-items-center'>{post.dateCreated.substring(0, 9)} · {post.timeRead} min read <span className={`icon-star1 ${styles.itemPreviewIcon} ml-2`} /> </span>
              </div>
            </div>
          </div>
          <div className={`mt-5 mb-3 ${styles.wrapImagePost}`}>
            <img src={post.image} alt='' />
          </div>
          <div className={` mt-5 mb-5 ${styles.contentPost}`}>
            <p>{post.description}</p>
          </div>

        </article>
      </div>
    </section>
  )
}

export default InteriorPost
