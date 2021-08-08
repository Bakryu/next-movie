export default {
  name: 'postPage',
  type: 'document',
  title: 'Post page',
  fields: [
    {
      name: 'pageSlug',
      type: 'string',
      title: 'Slug'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'timeToRead',
      type: 'string',
      title: 'Time to Read',
      description: 'Enter the time in this format (8 min read)'
    },
    {
      name: 'releaseDate',
      type: 'string',
      title: 'Release date',
      description: 'Enter the date in this format (Jun 3)'
    },
    { name: 'bodyPortableText', type: 'bodyPortableText' },
    {
      name: 'recommendation',
      type: 'array',
      title: 'Recommendation',
      validation: (Rule) => Rule.required().max(3),
      of: [{ name: 'post', type: 'reference', to: [{ type: 'postPage' }] }]
    },
    {
      name: 'previewGroupTitle',
      type: 'string',
      title: 'Preview Group Title'
    },
    {
      name: 'postPreview',
      type: 'postPreview',
      title: 'Post Preview'
    },
    {
      name: 'postReference',
      type: 'object',
      title: 'Post Categories',
      fields: [
        {
          name: 'type',
          type: 'reference',
          title: 'Type Post',
          to: [{ type: 'postCategoriesType' }]
        },
        {
          name: 'topic',
          type: 'reference',
          title: 'Topic Post',
          to: [{ type: 'postCategoriesTopic' }]
        },
        {
          name: 'industry',
          type: 'reference',
          title: 'Industry Post',
          to: [{ type: 'postCategoriesIndustry' }]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
