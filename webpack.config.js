const HtmlWebPackPlugin = require("html-webpack-plugin");

console.log('directory name: ' + __dirname);

module.exports = {
  // Path to your entry point. From this file Webpack will begin doing it's work
  entry: './src/index.js',
  module: {
    rules: [
      {
        // test is a regular expression for the file extension we transform.
        test: /\.js$/,
        //exclude is a regular expression that tells Webpack which path should be ignored when transforming modules.
        exclude: /node_modules/,
        use: {
          // set loader that is going to be applied to files
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            // modify loader
            options: {
              minimize: true
            }
          }
        ]
      },
    ]
  },
  plugins: [
    // this plugin will generate an HTML5 file for you
    new HtmlWebPackPlugin({
      // the html file that the server should load
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
