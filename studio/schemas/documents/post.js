export default {
  name: 'moviePage',
  type: 'document',
  title: 'Movie page',
  fields: [
    {
      name: 'pageSlug',
      type: 'string',
      title: 'Slug'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'description',
      type: 'string',
      title: 'description'
    },
    {
      name: 'duration',
      type: 'string',
      title: 'Duration'
    },
    {
      name: 'fees',
      type: 'string',
      title: 'fees'
    },
    {
      name: 'trailer',
      type: 'string',
      title: 'Trailer url'
    },

    {
      name: 'recommendation',
      type: 'array',
      title: 'Recommendation',
      of: [{ name: 'post', type: 'reference', to: [{ type: 'moviePage' }] }]
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
          name: 'postType',
          type: 'reference',
          title: 'post Type',
          to: [{ type: 'postType' }]
        },
        {
          name: 'genres',
          type: 'reference',
          title: 'Genres Post',
          to: [{ type: 'postCategoriesGenres' }]
        },
        {
          name: 'date',
          type: 'reference',
          title: 'Date Post',
          to: [{ type: 'postCategoriesDate' }]
        },
        {
          name: 'country',
          type: 'reference',
          title: 'country Post',
          to: [{ type: 'postCategoriesCountry' }]
        }
      ]
    },
    {
      name: 'actorReference',
      type: 'array',
      title: 'actors',
      of: [
        {
          name: 'actor',
          type: 'reference',
          title: 'actors',
          to: [{ type: 'actors' }]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
