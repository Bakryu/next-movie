export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '610e4dcfa0112cdff521b46e',
                  title: 'Sanity Studio',
                  name: 'next-movie-studio',
                  apiId: 'be3dc91b-1ff0-449f-8d01-f2b62b0a44a7'
                },
                {
                  buildHookId: '610e4dcffd210eb6f464dec4',
                  title: 'Landing pages Website',
                  name: 'next-movie',
                  apiId: '99e0667f-5af3-43ae-a96e-5fdd4a22dd73'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bakryu/next-movie',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://next-movie.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
