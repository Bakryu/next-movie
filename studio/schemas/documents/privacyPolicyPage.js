import SLUGS from '../../constants/slugs'

export default {
  name: 'privacyPolicyPage',
  type: 'document',
  title: 'Privacy Policy',
  initialValue: {
    pageSlug: SLUGS.PRIVACY_POLICY
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
