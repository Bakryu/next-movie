import bcp47 from 'bcp47'

export default {
  name: 'site-config',
  type: 'document',
  title: 'Site configuration',
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: ['update', 'publish'],

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title'
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url'
    },
    {
      name: 'frontpage',
      type: 'reference',
      description: 'Choose page to be the frontpage',
      to: { type: 'pagesList' }
    },
    {
      title: 'Site language',
      description: 'Should be a valid bcp47 language code like en, en-US, no or nb-NO',
      name: 'lang',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((lang) => (bcp47.parse(lang) ? true : 'Please use a valid bcp47 code'))
    },
    {
      title: 'Brand Logo',
      name: 'logo',
      type: 'object',
      fields: [
        {
          title: 'Logo Image',
          description: 'Best choice is to use an SVG where the color are set with currentColor',
          name: 'logoImage',
          type: 'image'
        },
        {
          title: 'Logo Image Main',
          description: 'Best choice is to use an SVG where the color are set with currentColor',
          name: 'logoImageMain',
          type: 'image'
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true
          }
        },
        {
          name: 'link',
          title: 'Link',
          description: 'Link to Home Page',
          type: 'reference',
          to: [{ type: 'route' }]
        }
      ]
    },
    {
      name: 'mainNavigation',
      type: 'navigationGroup',
      title: 'Main navigation',
      description: 'Select pages for the top menu'
    }
  ]
}
