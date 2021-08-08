// First, we must import the schema creator
// Document types
import pagesList from './documents/pages'
import route from './documents/route'
import forms from './documents/forms'
import siteConfig from './documents/siteConfig'
import homepage from './documents/homepage'
import testimonials from './documents/testimonials'
import privacyPolicyPage from './documents/privacyPolicyPage'
import termsOfUsePage from './documents/termsOfUsePage'

import availableMarkets from './documents/availableMarkets'
import blog from './documents/blog'
import commercialFlooring from './documents/commercialFlooring'
import faq from './documents/faq'
import grow from './documents/grow'
import own from './documents/own'
import process from './documents/process'
import transition from './documents/transition'
import initialFees from './documents/initialFees'
import page404 from './documents/page404'
import post from './documents/post'
import postCategoriesType from './documents/postCategoriesType'
import postCategoriesTopic from './documents/postCategoriesTopic'
import postCategoriesIndustry from './documents/postCategoriesIndustry'

// Object types
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import terms from './objects/terms'
import contacts from './objects/contacts'
import navigationItem from './objects/navigationItem'
import navigationGroup from './objects/navigationGroup'
import pathwaysItem from './objects/homePage/object/pathwaysItem'
import servicesItem from './objects/homePage/object/servicesItem'
import blackNavigation from './objects/blackNavigation'
import ownGrowTransitionPage from './objects/ownGrowTransitionPage/ownGrowTransitionPage'
import video from './objects/video'
import bodyPortableText from './objects/bodyPortableText'
import postPreview from './objects/postPreview'

//  page sections
import homeHero from './objects/homePage/sections/homeHero'
import homePartners from './objects/homePage/sections/homePartners'
import homePathways from './objects/homePage/sections/homePathways'
import homeServices from './objects/homePage/sections/homeServices'
import connectWithUs from './objects/forms/connectWithUs'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // documents
    route,
    siteConfig,
    pagesList,
    forms,

    // pages
    homepage,
    testimonials,
    privacyPolicyPage,
    termsOfUsePage,
    availableMarkets,
    blog,
    commercialFlooring,
    faq,
    own,
    grow,
    transition,
    process,
    initialFees,
    page404,
    post,
    postCategoriesType,
    postCategoriesTopic,
    postCategoriesIndustry,

    // page elements
    homeHero,
    homePathways,
    homeServices,
    homePartners,
    pathwaysItem,
    servicesItem,
    ownGrowTransitionPage,

    connectWithUs,
    embedHTML,
    figure,
    terms,
    contacts,
    navigationItem,
    navigationGroup,
    blackNavigation,
    video,
    bodyPortableText,
    postPreview
  ])
})
