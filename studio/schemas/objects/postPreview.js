export default {
  name: 'postPreview',
  type: 'object',
  title: 'Post Preview',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Preview Title'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Preview Description'
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Preview Image'
    }
  ]
}
