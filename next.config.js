const path = require('path');

module.exports = {
  // React config
  reactStrictMode: true,

  // Sass config
  sassOptions: { includePaths: [path.join(__dirname, 'styles')] }
};
