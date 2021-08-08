import SLUGS from '../../constants/slugs'

export default {
  name: 'testimonialsPage',
  type: 'document',
  title: 'Testimonials page',
  initialValue: {
    pageSlug: SLUGS.TESTIMONIALS
  },
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata'
    },
    {
      name: 'pageSlug',
      type: 'slug',
      title: 'Slug',
      readOnly: true
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    }
  ],

  preview: {
    title: 'title'
  }
}
