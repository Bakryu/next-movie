import SLUGS from '../../constants/slugs'

export default {
  name: 'blogPage',
  type: 'document',
  title: 'Blog',
  initialValue: {
    pageSlug: SLUGS.BLOG
  },
  fields: [
    {
      name: 'pageSlug',
      type: 'string',
      title: 'Slug',
      readOnly: true
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'mainCard',
      type: 'reference',
      title: 'Main Post',
      to: [{ type: 'postPage' }]
    },
    {
      name: 'badSearch',
      type: 'string',
      title: 'Bad Search Notification'
    },
    {
      name: 'suggestions',
      type: 'string',
      title: 'Suggestions Post'
    }
  ],

  preview: {
    select: {
      title: 'title'
    }
  }
}
