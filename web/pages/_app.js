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
   
  }[0]
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

      pageProps.config = {...config}

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
