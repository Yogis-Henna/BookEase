var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
var webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify('http://localhost:3015')
    })
  ],
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
       test: /\.css$/,
       use: ["style-loader","css-loader"]
     }
    ]
  }
};


 