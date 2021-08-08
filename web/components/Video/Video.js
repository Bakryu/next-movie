import {useState, useEffect} from 'react'
import StaticImage from '../StaticImage'
import classNames from 'classnames/bind'
import NextImage from '@/components/NextImage'
import playButton from '@/public/image/play-button.svg'
import styles from './video.module.scss'

const Video = ({video}) => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  const {videoUrl, videoPoster} = video
  return (
    <>
      <div className={classNames(styles.previewWrapper, isOpen && styles.invisible)}>
        <div
          className={styles.buttonWrapper}
          onClick={() => {
            setOpen(true)
          }}
        >
          <StaticImage link={playButton} alt="play button" />
        </div>
        <NextImage link={videoPoster} />
      </div>

      {isOpen && (
        <div className={styles.popUpWrapper}>
          <div className={styles.videoWrapper}>
            <div className={styles.exitButton} onClick={() => setOpen(false)}>
              <span></span>
              <span></span>
            </div>
            <video id="video" className={styles.video} controls autoPlay>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  )
}

export default Video
