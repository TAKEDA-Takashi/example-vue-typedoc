const TypedocWebpackPlugin = require('typedoc-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new TypedocWebpackPlugin({
        name: 'example-vue-typedoc',
        mode: 'file',
        includeDeclarations: false,
        ignoreCompilerErrors: true,
        excludeNotExported: true,
      }, './src/'),
    ],
  },
};
