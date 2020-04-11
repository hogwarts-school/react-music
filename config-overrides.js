/* eslint-disable @typescript-eslint/no-require-imports */
const { override, fixBabelImports, addWebpackAlias, addPostcssPlugins } = require('customize-cra');
const pxtorem = require('postcss-pxtorem');
const path = require('path');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }),
  addPostcssPlugins([
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    })
  ]),
  addWebpackAlias({
    '@src': path.resolve(__dirname, './src'),
    '@components': path.resolve(__dirname, './src/components'),
    '@constant': path.resolve(__dirname, './src/constant'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@sass': path.resolve(__dirname, './src/sass'),
    '@store': path.resolve(__dirname, './src/store'),
    '@test-tools': path.resolve(__dirname, './src/test-tools'),
    '@middleware': path.resolve(__dirname, './src/middleware'),
    '@hooks': path.resolve(__dirname, './src/hooks')
  })
);
