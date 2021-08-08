import SLUGS from '../../constants/slugs'
export default {
  name: 'homePage',
  type: 'document',
  title: 'Home page',
  initialValue: {
    pageSlug: SLUGS.HOME
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
    },
    { name: 'hero', type: 'homeHero' },
    { name: 'pathways', type: 'homePathways' },
    { name: 'services', type: 'homeServices' },
    { name: 'partners', type: 'homePartners' }
  ],

  preview: {
    select: {
      title: 'title'
    }
  }
}
