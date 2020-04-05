const { override, fixBabelImports } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "cro-component",
    libraryDirectory: "esm/components",
    style: true,
  })
);
