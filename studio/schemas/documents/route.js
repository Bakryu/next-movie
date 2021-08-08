import { MdLink } from 'react-icons/md'

export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  icon: MdLink,
  fields: [
    {
      name: 'link',
      type: 'string',
      title: 'Link',
      description: 'leave the field blank to use the default link'
    },
    {
      name: 'page',
      type: 'reference',
      description: 'Select the page that this route should point to',
      to: [
        {
          type: 'homePage'
        },
        {
          type: 'termsOfUsePage'
        },
        {
          type: 'privacyPolicyPage'
        },
        {
          type: 'availableMarketsPage'
        },
        {
          type: 'blogPage'
        },
        {
          type: 'commercialFlooringPage'
        },
        {
          type: 'faqPage'
        },
        {
          type: 'growPage'
        },
        {
          type: 'ownPage'
        },
        {
          type: 'processPage'
        },
        {
          type: 'testimonialsPage'
        },
        {
          type: 'transitionPage'
        },
        {
          type: 'initialFeesPage'
        }
      ]
    },
    {
      name: 'includeInSitemap',
      type: 'boolean',
      title: 'Include page in sitemap',
      description: 'For search engines. Will be added to /sitemap.xml'
    },
    {
      name: 'disallowRobots',
      type: 'boolean',
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines'
    }
  ],
  preview: {
    select: {
      slug: 'page.pageSlug',
      pageTitle: 'page.title'
    },
    prepare({ slug, pageTitle }) {
      return {
        title: slug === '/' ? '/' : `${slug}`,
        subtitle: `Page: ${pageTitle}`
      }
    }
  }
}
