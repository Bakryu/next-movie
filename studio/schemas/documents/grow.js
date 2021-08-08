import SLUGS from '../../constants/slugs'

export default {
  name: 'growPage',
  type: 'document',
  title: 'Grow',
  initialValue: {
    pageSlug: SLUGS.GROW
  },
  fields: [
    {
      name: 'pageSlug',
      type: 'string',
      title: 'Slug',
      readOnly: true
    },
    {
      name: 'growContent',
      type: 'ownGrowTransitionPage'
    }
  ],

  preview: {
    select: {
      title: 'growContent.hero.title'
    }
  }
}
