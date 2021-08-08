export default {
  name: 'ownGrowTransitionPage',
  type: 'object',
  title: 'Page Data',
  fields: [
    {
      name: 'hero',
      type: 'object',
      title: 'Main section',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Page Title'
        },
        {
          name: 'pageQuestions',
          type: 'array',
          title: 'Page Questions',
          of: [
            {
              name: 'question',
              type: 'string',
              title: 'Questions'
            }
          ]
        },
        {
          name: 'description',
          type: 'string',
          title: 'We can help'
        },
        {
          name: 'video',
          type: 'video'
        }
      ]
    },
    {
      name: 'proposal',
      type: 'object',
      title: 'Proposal',
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
          name: 'link',
          type: 'reference',
          to: [{ type: 'route' }]
        },
        {
          name: 'list',
          type: 'array',
          title: 'Proposal Item List',
          of: [
            {
              name: 'item',
              type: 'object',
              title: 'Proposal Item',
              fields: [
                { name: 'image', type: 'image', title: 'Item Image' },
                {
                  name: 'description',
                  type: 'string',
                  title: 'Item Description'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'benefits',
      type: 'object',
      title: 'Benefits',
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
          name: 'list',
          type: 'array',
          title: 'Benefits Item List',
          of: [
            {
              name: 'item',
              type: 'object',
              title: 'Benefits Item',
              fields: [
                {
                  name: 'description',
                  type: 'string',
                  title: 'Item Description'
                }
              ]
            }
          ]
        },
        { name: 'benefitsImage', type: 'image', title: 'Benefits Image' }
      ]
    }
  ]
}
