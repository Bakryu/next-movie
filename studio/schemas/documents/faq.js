import SLUGS from '../../constants/slugs'

export default {
  name: 'faqPage',
  type: 'document',
  title: 'FAQ',
  initialValue: {
    pageSlug: SLUGS.FAQ
  },
  fields: [
    {
      name: 'pageSlug',
      type: 'string',
      title: 'Slug',
      readOnly: true
    },
    {
      name: 'faqContent',
      type: 'object',
      title: 'FAQ Content',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title'
        },
        {
          name: 'list',
          type: 'array',
          title: 'FAQ List',
          of: [
            {
              name: 'listItem',
              type: 'object',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Group name'
                },
                {
                  name: 'groupList',
                  type: 'object',
                  fields: [
                    {
                      name: 'list',
                      type: 'array',
                      title: 'Group List',
                      of: [
                        {
                          name: 'item',
                          type: 'object',
                          title: 'List Item',
                          fields: [
                            {
                              name: 'title',
                              type: 'string',
                              title: 'Item Title'
                            },
                            {
                              name: 'description',
                              type: 'string',
                              title: 'Item Description'
                            },
                            {
                              name: 'descriptionList',
                              type: 'array',
                              title: 'Item Description List',
                              of: [
                                {
                                  name: 'item',
                                  type: 'string',
                                  title: 'Description Item'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
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
      title: 'faqContent.title'
    }
  }
}
