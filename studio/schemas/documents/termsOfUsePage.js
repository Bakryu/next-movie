import SLUGS from '../../constants/slugs'

export default {
  name: 'termsOfUsePage',
  type: 'document',
  title: 'Terms of Use',
  initialValue: {
    pageSlug: SLUGS.TERMS_OF_USE
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
