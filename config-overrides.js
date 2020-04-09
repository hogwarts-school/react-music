/* eslint-disable @typescript-eslint/no-require-imports */
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'cro-component',
    libraryDirectory: 'esm/components',
    style: true
  }),
  addWebpackAlias({
    '@/*': path.resolve(__dirname, './src/*'),
    '@component/*': path.resolve(__dirname, './src/component/*'),
    '@constant/*': path.resolve(__dirname, './src/constant/*'),
    '@pages/*': path.resolve(__dirname, './src/pages/*'),
    '@store/*': path.resolve(__dirname, './src/store/*')
  })
);
