import React from 'react'
import BaseApp from 'next/app'
import client from '../client'
import '../styles/global.scss'

const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    logo{
      ...,
      "linkAlternative":link->link,
      "slug":link->page->pageSlug
      
    },
    blackNavigation,
    terms{
      ...,
      privacyPolicy{
        name,
        "link":link->link,
        "slug":link->page->pageSlug
      },
      termsOfUse{
        name,
        "link":link->link,
        "slug":link->page->pageSlug
      },

    },
    
    ownGrowTransitionNavigation[]{
      name,
      "link":link->link,
      "slug":link->page->pageSlug
    },
    
    mainNavigation{group[]{
      name,
      groupBoxName,
      groupList[]{
        name,
        "link":link->link,
        "slug":link->page->pageSlug
      
    },
      "link":link->link,
      "slug":link->page->pageSlug
  }},
    footerNavigation{
      firstColumn{group[]{
        name,
        "link":link->link,
        "slug":link->page->pageSlug
    }},
      secondColumn{group[]{
        name,
        "link":link->link,
        "slug":link->page->pageSlug}}
    }
  }[0]
  `

const siteFormQuery = `
  *[_type == "formList"][0]
  `

class App extends BaseApp {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    const getConfig = async () => {
      const config = await client.fetch(siteConfigQuery).then((config) => {
        return config
      })
      const formQuery = await client.fetch(siteFormQuery).then((form) => {
        return form
      })

      pageProps.config = {...config, ...formQuery}
      pageProps.formQuery = formQuery.connectWithUsForm

      return {pageProps}
    }
    // Add site config from sanity
    return getConfig()
  }

  render() {
    const {Component, pageProps} = this.props
    return <Component {...pageProps} />
  }
}

export default App
