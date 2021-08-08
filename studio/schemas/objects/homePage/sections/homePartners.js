export default {
  type: 'object',
  name: 'homePartners',
  title: 'Partners',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subTitle',
      type: 'string',
      title: 'Partners Description'
    },
    {
      name: 'linkName',
      type: 'string',
      title: 'Link Text'
    },
    {
      name: 'servicesImageListDesc',
      type: 'array',
      title: 'Services Image List Default',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image Default Desctop'
        }
      ]
    },
    {
      name: 'servicesImageListMob',
      type: 'array',
      title: 'Services Image List Hover and Mobile',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image Default Mobile'
        }
      ]
    }
  ]
}
