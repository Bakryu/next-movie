import client from '../../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import MainContainer from '@/components/MainContainer'
import CategoryContent from '@/scenes/CategoryContent'

const Category = ({config, category}) => {
  return (
    <MainContainer config={config}>
      <CategoryContent category={category} />
    </MainContainer>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "category" ][]{pageSlug}`).then((res) => {
    return [...res]
  })

  return {
    paths: paths?.map(({pageSlug}) => ({params: {category: pageSlug}})),
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const slug = params.category
  const data = await client
    .fetch(
      groq`{"category": *[_type == "postPage" ][]{

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

  return {
    props: {...data}
  }
}

Category.propTypes = {
  config: PropTypes.object,
  formQuery: PropTypes.object,
  bodyPortableText: PropTypes.array,
  postPreview: PropTypes.object,
  recommendation: PropTypes.array,
  releaseDate: PropTypes.string,
  timeToRead: PropTypes.string
}

export default Category
