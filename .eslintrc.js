const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'linebreak-style': ['error', 'unix'],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] },
    },
  ],
};
