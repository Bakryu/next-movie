export default {
  name: 'actors',
  type: 'document',
  title: 'Actors',
  fields: [
    {
      name: 'pageSlug',
      type: 'string',
      title: 'Slug'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'description',
      type: 'string',
      title: 'description'
    },
    { name: 'image', type: 'figure' }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
