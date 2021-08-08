import SLUGS from '../../constants/slugs'

export default {
  name: 'ownPage',
  type: 'document',
  title: 'Own',
  initialValue: {
    pageSlug: SLUGS.OWN
  },
  fields: [
    {
      name: 'pageSlug',
      type: 'string',
      title: 'Slug',
      readOnly: true
    },
    {
      name: 'ownContent',
      type: 'ownGrowTransitionPage'
    }
  ],

  preview: {
    select: {
      title: 'ownContent.hero.title'
    }
  }
}
