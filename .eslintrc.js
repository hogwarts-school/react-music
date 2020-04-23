module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  plugins: ['react-hooks'],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    browser: true,
    // node: true,
    // mocha: true,
    jest: true
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // Customize your rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn' // <--- THIS IS THE NEW RULE
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
