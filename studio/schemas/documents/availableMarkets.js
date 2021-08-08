import SLUGS from '../../constants/slugs'

export default {
  name: 'availableMarketsPage',
  type: 'document',
  title: 'Available markets',
  initialValue: {
    pageSlug: SLUGS.AVAILABLE_MARKETS
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'pageSlug',
      type: 'string',
      title: 'Slug',
      readOnly: true
    }
  ],

  preview: {
    select: {
      title: 'title'
    }
  }
}
