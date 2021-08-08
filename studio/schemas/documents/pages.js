export default {
  name: 'pagesList',
  type: 'document',
  title: 'Pages',
  fields: [
    {
      name: 'homePage',
      type: 'homePage',
      title: 'Home page'
    }
  ],

  preview: {
    select: {
      title: 'title'
    }
  }
}
