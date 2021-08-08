import Head from 'next/head'
import Footer from '../Footer'
import ConnectForm from '../forms/ConnectForm'
import Header from '../Header'

const MainContainer = (props) => {
  const {children, config, connectWithUsForm} = props
  const {mainNavigation, footerNavigation, contacts, terms, logo, buttons, blackNavigation} = config

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
      <Header
        navigationList={mainNavigation.group}
        logo={logo}
        blackNavigation={blackNavigation}
        contacts={contacts}
      />
      {children}
      <ConnectForm
        connectWithUsForm={connectWithUsForm}
        buttons={buttons}
        privacyPolicy={terms.privacyPolicy}
        termsOfUse={terms.termsOfUse}
      />
      <Footer footerNavigation={footerNavigation} contacts={contacts} terms={terms} logo={logo} />
    </>
  )
}

export default MainContainer
