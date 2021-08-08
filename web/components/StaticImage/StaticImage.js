import Image from 'next/image'

const StaticImage = ({link, alt}) => {
  const myLoader = ({src}) => {
    return `${src}`
  }
  return <Image loader={myLoader} alt={alt} layout="fill" src={link} />
}

export default StaticImage
