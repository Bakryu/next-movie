export default {
  type: 'object',
  name: 'homePathways',
  title: 'Pathways to ownership',
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
      name: 'pathwaysItemList',
      type: 'array',
      title: 'Pathways Item List',
      of: [{ name: 'pathwaysListItem ', type: 'pathwaysItem', title: 'Pathways Item' }]
    },
    {
      name: 'pathwaysImage',
      type: 'image',
      title: 'Pathways image'
    }
  ]
}
