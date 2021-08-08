import SLUGS from '../../constants/slugs'

export default {
  name: 'transitionPage',
  type: 'document',
  title: 'Transition',
  initialValue: {
    pageSlug: SLUGS.TRANSITION
  },
  fields: [
    {
      name: 'pageSlug',
      type: 'string',
      title: 'Slug',
      readOnly: true
    },
    {
      name: 'transitionContent',
      type: 'ownGrowTransitionPage'
    }
  ],

  preview: {
    select: {
      title: 'transitionContent.hero.title'
    }
  }
}
