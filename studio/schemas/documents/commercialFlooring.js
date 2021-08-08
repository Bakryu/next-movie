import SLUGS from '../../constants/slugs'

export default {
  name: 'commercialFlooringPage',
  type: 'document',
  title: 'Commercial Flooring',
  initialValue: {
    pageSlug: SLUGS.COMMERCIAL_FLOORING
  },
  fields: [
    {
      name: 'pageSlug',
      type: 'string',
      title: 'Slug',
      readOnly: true
    },
    {
      name: 'commercialFlooringContent',
      type: 'object',
      title: 'Commercial Flooring Content',
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
          title: 'Commercial Flooring List',
          of: [
            {
              name: 'listItem',
              type: 'object',
              title: 'List Item',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Group Title'
                },
                {
                  name: 'groupList',
                  type: 'object',
                  fields: [
                    {
                      name: 'list',
                      type: 'array',
                      title: 'Group Description List',
                      of: [
                        {
                          name: 'item',
                          type: 'string',
                          title: 'Description Item'
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'mainImage',
                  type: 'figure',
                  title: 'Main Image'
                },
                {
                  name: 'secondaryImage',
                  type: 'figure',
                  title: 'Secondary Image'
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
      title: 'commercialFlooringContent.title'
    }
  }
}
