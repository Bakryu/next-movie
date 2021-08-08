import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

const getUrl = (source) => {
  const builder = imageUrlBuilder(client)
  return builder.image(source)
}
export default getUrl
