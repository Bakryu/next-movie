export default {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'This text will be displayed on the site'
    },
    {
      name: 'link',
      type: 'reference',
      to: [{ type: 'route' }]
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
