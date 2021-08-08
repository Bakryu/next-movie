import S from '@sanity/desk-tool/structure-builder'
import { MdDashboard, MdSettings } from 'react-icons/md'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem) =>
  ![
    'pagesList',
    'route',
    'site-config',
    'testimonialsPage',
    'homePage',
    'formList',
    'privacyPolicyPage',
    'termsOfUsePage',
    'availableMarketsPage',
    'blogPage',
    'commercialFlooringPage',
    'faqPage',
    'growPage',
    'ownPage',
    'processPage',
    'transitionPage',
    'initialFeesPage',
    'page404',
    'postPage',
    'postCategoriesType',
    'postCategoriesTopic',
    'postCategoriesIndustry'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Site config')
        .icon(MdSettings)
        .child(S.editor().id('config').schemaType('site-config').documentId('global-config')),
      S.listItem()
        .title('Pages')
        .icon(MdDashboard)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home page')
                .schemaType('homePage')
                .child(S.documentTypeList('homePage').title('Home page')),
              S.listItem()
                .title('Testimonials page')
                .schemaType('testimonialsPage')
                .child(S.documentTypeList('testimonialsPage').title('Testimonials page')),
              S.listItem()
                .title('Privacy Policy')
                .schemaType('privacyPolicyPage')
                .child(S.documentTypeList('privacyPolicyPage').title('Privacy Policy')),
              S.listItem()
                .title('Terms of Use')
                .schemaType('termsOfUsePage')
                .child(S.documentTypeList('termsOfUsePage').title('Terms of Use')),
              S.listItem()
                .title('Available markets')
                .schemaType('availableMarketsPage')
                .child(S.documentTypeList('availableMarketsPage').title('Available markets')),
              S.listItem()
                .title('Blog')
                .schemaType('blogPage')
                .child(S.documentTypeList('blogPage').title('Blog')),
              S.listItem()
                .title('Commercial Flooring')
                .schemaType('commercialFlooringPage')
                .child(S.documentTypeList('commercialFlooringPage').title('Commercial Flooring')),
              S.listItem()
                .title('FAQ')
                .schemaType('faqPage')
                .child(S.documentTypeList('faqPage').title('FAQ')),
              S.listItem()
                .title('Own')
                .schemaType('ownPage')
                .child(S.documentTypeList('ownPage').title('Own')),
              S.listItem()
                .title('Grow')
                .schemaType('growPage')
                .child(S.documentTypeList('growPage').title('Grow')),
              S.listItem()
                .title('Transition')
                .schemaType('transitionPage')
                .child(S.documentTypeList('transitionPage').title('Transition')),
              S.listItem()
                .title('Process')
                .schemaType('processPage')
                .child(S.documentTypeList('processPage').title('Process')),
              S.listItem()
                .title('Initial Fees Page')
                .schemaType('initialFeesPage')
                .child(S.documentTypeList('initialFeesPage').title('Initial Fees Page')),
              S.listItem()
                .title('Page 404')
                .schemaType('page404')
                .child(S.documentTypeList('page404').title('Page 404'))
            ])
        ),
      S.listItem()
        .title('Forms')
        .icon(MdDashboard)
        .child(
          S.list()
            .title('Form')
            .items([
              S.listItem()
                .title('Connect with us Form')
                .schemaType('formList')
                .child(
                  S.documentTypeList('formList').id('connectWithUs').title('Connect with us Form')
                )
            ])
        ),
      S.listItem()
        .title('Routes')
        .schemaType('route')
        .child(S.documentTypeList('route').title('Routes')),
      S.listItem()
        .title('Posts')
        .icon(MdDashboard)
        .schemaType('postPage')
        .child(S.documentTypeList('postPage').title('Post')),

      S.listItem()
        .title('Blog Categories')
        .icon(MdSettings)
        .child(
          S.list()
            .title('Category')
            .items([
              S.listItem()
                .title('Type')
                .icon(MdDashboard)
                .schemaType('postCategoriesType')
                .child(S.documentTypeList('postCategoriesType').title('Type')),
              S.listItem()
                .title('Topic')
                .icon(MdDashboard)
                .schemaType('postCategoriesTopic')
                .child(S.documentTypeList('postCategoriesTopic').title('Topic')),
              S.listItem()
                .title('Industry')
                .icon(MdDashboard)
                .schemaType('postCategoriesIndustry')
                .child(S.documentTypeList('postCategoriesIndustry').title('Industry'))
            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
