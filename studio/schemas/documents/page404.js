export default {
  name: 'page404',
  type: 'document',
  title: 'Error 404 Page',

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Image alternative'
    }
  ],

  preview: {
    select: {
      title: 'title'
    }
  }
}
