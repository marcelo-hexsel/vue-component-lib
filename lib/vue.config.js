module.exports = {
  chainWebpack: config => {
    config.externals({
      moment: "moment"
    });
  },
  configureWebpack: {
    output: {
      libraryExport: "default"
    }
  }
};
