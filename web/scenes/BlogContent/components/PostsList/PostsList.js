import PropTypes from 'prop-types'
import {useState} from 'react'
import useResize from 'use-resizing'
import classNames from 'classnames/bind'
import getImageSize from '@/helpers/getImageSize'

import PostPreview from '@/components/PostPreview'
import StaticImage from '@/components/StaticImage'

import arrow from '@/public/image/arrow-blog.svg'
import search from '@/public/image/search-big.svg'
import styles from './postsList.module.scss'

const PostsList = ({posts, slug, isPostsNotFound, badSearch, suggestions}) => {
  const [pageNumber, setPageNumber] = useState(1)
  const screenSize = useResize()
  const width = screenSize.width
  const paginationQuantity = 8
  const pagesQuantity = Math.ceil(posts.length / paginationQuantity)
  const getVisiblePosts = () => {
    const firstPost = pageNumber * paginationQuantity - paginationQuantity
    const lastPost = firstPost + paginationQuantity - 1
    return posts?.filter((_, idx) => idx >= firstPost && idx <= lastPost)
  }

  const visiblePosts = getVisiblePosts()
  return (
    <div className={classNames(styles.list, isPostsNotFound && styles.badSearch)}>
      {visiblePosts?.map(({postPreview, releaseDate, timeToRead, pageSlug, postReference}, idx) => {
        return (
          <PostPreview
            postPreview={postPreview}
            releaseDate={releaseDate}
            timeToRead={timeToRead}
            pageSlug={pageSlug}
            category={postReference.topic.itemName}
            cardStyle="cardStyle"
            imageSize={getImageSize(idx, width)}
            key={idx}
            slug={slug}
          />
        )
      })}
      <div className={styles.buttonWrapper}>
        <div
          className={classNames(styles.button, styles.left, pageNumber === 1 && styles.activeLeft)}
          onClick={() => {
            setPageNumber((prevState) => --prevState)
          }}
        >
          <StaticImage link={arrow} alt="arrow" />
          {pageNumber}
        </div>
        <span>/</span>
        <div
          className={classNames(
            styles.button,
            styles.right,
            pagesQuantity <= pageNumber && styles.activeRight
          )}
          onClick={() => {
            setPageNumber((prevState) => ++prevState)
          }}
        >
          {pagesQuantity}
          <StaticImage link={arrow} alt="arrow" />
        </div>
      </div>
      <div className={styles.badSearchWrapper}>
        <div className={styles.badSearchTitle}>
          <StaticImage link={search} alt="search image" />
          {badSearch}
        </div>
        <p className={styles.suggestions}>{suggestions}</p>
      </div>
    </div>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array,
  slug: PropTypes.string,
  isPostsNotFound: PropTypes.bool
}
export default PostsList
