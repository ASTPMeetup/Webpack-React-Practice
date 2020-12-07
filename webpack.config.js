const path = require('path');

console.log('dir: ' + __dirname);

module.exports = {
    entry: './src/test.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    }
}