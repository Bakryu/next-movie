export default {
  type: 'object',
  name: 'homeHero',
  title: 'Hero',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subTitle',
      type: 'string',
      title: 'Hero Description'
    },
    {
      name: 'proposition',
      type: 'string',
      title: 'Hero Proposition'
    },
    {
      name: 'propositionList',
      type: 'array',
      title: 'Proposition List',
      of: [
        {
          name: 'propositionItem',
          type: 'string',
          title: 'Proposition Item'
        }
      ]
    },
    {
      name: 'heroBg',
      type: 'image',
      title: 'Hero background'
    },
    {
      name: 'video',
      type: 'video'
    }
  ]
}
