const path = require('path');

console.log('directory name: ' + __dirname);

module.exports = {
    entry: './src/test.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    }
}