export default {
  type: 'object',
  name: 'homeServices',
  title: 'Services',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subTitle',
      type: 'string',
      title: 'Services Description'
    },
    {
      name: 'servicesItemList',
      type: 'array',
      title: 'Services Item List',
      of: [
        {
          type: 'servicesItem'
        }
      ]
    }
  ]
}
