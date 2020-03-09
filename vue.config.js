module.exports = {
  publicPath: '',
  outputDir: './public',
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Coronavírus no Brasil | Quantos casos confirmados?';
      args[0].meta = {
        viewport:
          'width=device-width, height=device-height,initial-scale=1,user-scalable=no,viewport-fit=cover'
      };

      return args;
    });
  }
};
