import SLUGS from '../../constants/slugs'

export default {
  name: 'initialFeesPage',
  type: 'document',
  title: 'Initial Fees',
  initialValue: {
    pageSlug: SLUGS.INITIAL_FEES
  },
  fields: [
    {
      name: 'pageSlug',
      type: 'string',
      title: 'Slug',
      readOnly: true
    },
    {
      name: 'initialFeesContent',
      type: 'object',
      title: 'Initial Fees Content',
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
          name: 'tableTitle',
          type: 'string',
          title: 'Table Title'
        },
        {
          name: 'tableCompanyName',
          type: 'string',
          title: 'Table Company Name'
        },
        {
          name: 'expenditureList',
          type: 'array',
          title: 'Expenditure List',
          of: [
            {
              name: 'listItem',
              type: 'object',
              title: 'Expenditure Item',
              fields: [
                {
                  name: 'expenditureName',
                  type: 'string',
                  title: 'Expenditure Name'
                },
                {
                  name: 'expenditureFees',
                  type: 'string',
                  title: 'Expenditure Fees'
                }
              ]
            }
          ]
        },
        {
          name: 'descriptionAfter',
          type: 'string',
          title: 'Description after table'
        }
      ]
    }
  ],

  preview: {
    select: {
      title: 'initialFeesContent.title'
    }
  }
}
