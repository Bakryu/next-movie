import Head from 'next/head'
import Header from '../Header'

const MainContainer = (props) => {
  const {children, config} = props
  const {mainNavigation, logo} = config

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* <title>{title}</title> */}
      </Head>
      <Header navigationList={mainNavigation.group} logo={logo} />
      {children}
    </>
  )
}

export default MainContainer
