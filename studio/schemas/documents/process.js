import SLUGS from '../../constants/slugs'

export default {
  name: 'processPage',
  type: 'document',
  title: 'Process',
  initialValue: {
    pageSlug: SLUGS.PROCESS
  },
  fields: [
    {
      name: 'pageSlug',
      type: 'string',
      title: 'Slug',
      readOnly: true
    },
    {
      name: 'processContent',
      type: 'object',
      title: 'Process Content',
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
          name: 'processList',
          type: 'array',
          title: 'Process List',
          of: [
            {
              name: 'listItem',
              type: 'object',
              title: 'Process Item',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Process Title'
                },
                {
                  name: 'description',
                  type: 'string',
                  title: 'Process Description'
                },
                {
                  name: 'image',
                  type: 'image',
                  title: 'Process Image',
                  options: {
                    hotspot: true
                  }
                },
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Process Image Alternative Text'
                }
              ]
            }
          ]
        }
      ]
    }
  ],

  preview: {
    select: {
      title: 'processContent.title'
    }
  }
}
