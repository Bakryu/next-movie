export default {
  name: 'blackNavigation',
  title: 'Black Navigation',
  type: 'object',
  fields: [
    {
      name: 'backName',
      title: 'back to koydol website "Text"',
      type: 'string'
    },
    {
      name: 'backLink',
      title: 'back to koydol website "Link"',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'backName'
    }
  }
}
