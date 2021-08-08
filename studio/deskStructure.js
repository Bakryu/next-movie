import S from '@sanity/desk-tool/structure-builder'
import { MdDashboard, MdSettings } from 'react-icons/md'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem) =>
  ![
    'pagesList',
    'route',
    'site-config',
    'homePage',
    'blogPage',
    'page404',
    'moviePage',
    'postCategoriesDate',
    'postCategoriesCountry',
    'postCategoriesDate'
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
                .title('Blog')
                .schemaType('blogPage')
                .child(S.documentTypeList('blogPage').title('Blog')),

              S.listItem()
                .title('Page 404')
                .schemaType('page404')
                .child(S.documentTypeList('page404').title('Page 404'))
            ])
        ),

      S.listItem()
        .title('Routes')
        .schemaType('route')
        .child(S.documentTypeList('route').title('Routes')),
      S.listItem()
        .title('movie')
        .icon(MdDashboard)
        .schemaType('moviePage')
        .child(S.documentTypeList('moviePage').title('movie')),
      // S.listItem()
      //   .title('actors')
      //   .icon(MdDashboard)
      //   .schemaType('actors')
      //   .child(S.documentTypeList('actors').title('actors')),

      S.listItem()
        .title('Blog Categories')
        .icon(MdSettings)
        .child(
          S.list()
            .title('Category')
            .items([
              S.listItem()
                .title('postCategoriesDate')
                .icon(MdDashboard)
                .schemaType('postCategoriesDate')
                .child(S.documentTypeList('postCategoriesDate').title('postCategoriesDate')),
              S.listItem()
                .title('postCategoriesCountry')
                .icon(MdDashboard)
                .schemaType('postCategoriesCountry')
                .child(S.documentTypeList('postCategoriesCountry').title('postCategoriesCountry')),
              S.listItem()
                .title('postCategoriesGenres')
                .icon(MdDashboard)
                .schemaType('postCategoriesGenres')
                .child(S.documentTypeList('postCategoriesGenres').title('postCategoriesGenres'))
            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
