import Image from 'next/image'
import getUrl from '@/helpers/getUrl'
import styles from './nextImage.module.scss'

const NextImage = ({
  link,
  alt,
  width = 172,
  height = 248,
  quality=100,
  blur = 'https://i1.wp.com/angularscript.com/wp-content/uploads/2018/06/Progressively-Loading-Images-With-Blur-Effect-min.png?ssl=1'
}) => {
  
  const url = getUrl(link).url()
  const myLoader = ({src, quality, width}) => {
    return `${src}/?w=${width || 1200}&q=${quality}`
  }
  return (
    <div className={styles.image}>
      <Image
        loader={myLoader}
        alt={alt}
        width={width}
        height={height}
        src={url}
        quality={quality}
        placeholder="blur"
        blurDataURL={blur}
      />
    </div>
  )
}

export default NextImage
