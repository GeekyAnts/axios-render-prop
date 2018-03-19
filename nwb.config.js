module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'FetchRenderProp',
      externals: {
        react: 'React'
      }
    }
  }
}
