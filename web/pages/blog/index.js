import client from '../../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import MainContainer from '@/components/MainContainer'
import BlogContent from '@/scenes/BlogContent'

const Blog = ({config, formQuery, filter, posts, blog}) => {
  return (
    <MainContainer config={config} connectWithUsForm={formQuery}>
      <BlogContent filter={filter} posts={posts} button={config.buttons} blog={blog} />
    </MainContainer>
  )
}

export async function getStaticProps() {
  const data = await client
    .fetch(
      groq`{"posts": *[_type == "postPage" ][]{

      pageSlug,
      postPreview,
      releaseDate,
      timeToRead,
      postReference{
        topic->{itemName},
        type->{itemName},
        industry->{itemName},
       },
   
        'filter': *[_type == 'postCategoriesType' ][]{
          ...,
        }
     
  },
  "blog":*[_type == 'blogPage'][0]{
    pageSlug,
    title,
    suggestions,
    description,
    badSearch,
    mainCard->{
      pageSlug,
      postPreview,
      releaseDate,
      timeToRead,
      "category":postReference.topic->itemName
    }
},

  "filter": {
    "type" :*[_type == 'postCategoriesType' ][]{
      groupName,
      itemName
  },
    "topic" :*[_type == 'postCategoriesTopic' ][]{
      groupName,
      itemName
  },
    "industry" :*[_type == 'postCategoriesIndustry' ][]{
      groupName,
      itemName
  },
}
}`
    )
    .then((res) => {
      return {...res}
    })

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {...data}
  }
}

Blog.propTypes = {
  config: PropTypes.object,
  formQuery: PropTypes.object,
  filter: PropTypes.object,
  blog: PropTypes.object,
  posts: PropTypes.array
}

export default Blog
