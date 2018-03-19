module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "AxiosRenderProp",
      externals: {
        react: "React"
      }
    }
  }
};
