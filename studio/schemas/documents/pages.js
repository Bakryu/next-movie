export default {
  name: 'pagesList',
  type: 'document',
  title: 'Pages',
  fields: [
    {
      name: 'testimonialsPage',
      type: 'testimonialsPage',
      title: 'Testimonials page'
    },
    {
      name: 'homePage',
      type: 'homePage',
      title: 'Home page'
    },
    {
      name: 'termsOfUsePage',
      type: 'termsOfUsePage',
      title: 'Terms of Use page'
    },
    {
      name: 'privacyPolicyPage',
      type: 'privacyPolicyPage',
      title: 'Privacy Policy'
    }
  ],

  preview: {
    select: {
      title: 'title'
    }
  }
}
