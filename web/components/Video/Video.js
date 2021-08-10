const Video = ({video}) => {
  return (
    <iframe
      width="1280"
      height="720"
      src={video}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}

export default Video
