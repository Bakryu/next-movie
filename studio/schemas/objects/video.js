export default {
  name: 'video',
  type: 'object',
  title: 'Video Group',
  fields: [
    {
      name: 'videoPoster',
      type: 'image',
      title: 'Video Poster'
    },
    {
      name: 'videoUrl',
      type: 'file',
      title: 'Video',
      description: 'upload video format "mp4" to this field'
    }
  ]
}
