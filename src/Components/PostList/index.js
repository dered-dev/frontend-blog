
import React from 'react'
import PostCard from '../Gridpost/PostCard'
import { Link } from 'react-router-dom'

// styles
import styles from './index.module.css'

function PostList (props) {
  console.log(props.list)
  return (
    <section className={styles.containerPosts}>
      {
        props.list.map((post, index) => (
          <Link
            key={post.id}
            className={`d-flex w-100 ${styles.linkPost}`}
            to={`/post-detail/${post.id}`}
          >
            <PostCard
              id={post.id}
              imageUrl={post.imageUrl}
              title={post.title}
              thumbnail={post.title}
              text={post.text}
              readTime={post.readTime}
              author={post.author}
              category={post.category}
            />
          </Link>

        )
        )
      }
    </section>
  )
}

export default PostList
