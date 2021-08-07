import React from 'react'
import BaseApp from 'next/app'
import client from '../client'
// import 'normalize.css'
import '../styles/shared.module.css'


const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    }
  }[0]
  `

class App extends BaseApp {
  static async getStaticProps ({Component, ctx}) {
    let pageProps = {}

    if (Component.getStaticProps) {
      pageProps = await Component.getStaticProps(ctx)
    }

    // Add site config from sanity
    return client.fetch(siteConfigQuery).then(config => {
      if (!config) {
        return {pageProps}
      }
      if (config && pageProps) {
        pageProps.config = config
      }

      return {pageProps}
    })
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      <Component {...pageProps} />
    )
  }
}

export default App
