module.exports = {
  extends: ['eslint:recommended', 'next'],
  plugins: ['react-hooks', 'react'],

  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  },
  parser: 'babel-eslint',
  globals: {
    window: true,
    document: true,
    module: true,
    process: true,
    FormData: true,
    fetch: true
  }
}
