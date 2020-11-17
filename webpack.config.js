const path = require('path');
module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { // for loading jsx, react files
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          'presets': ['@babel/preset-env', '@babel/preset-react']
        }
      },
      { // for loading css file
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      { // for loading local images (prime icon)
        test: /\.(jpg|jpeg|png)$/,
        use: {
         loader: 'url-loader'
        }
       }
    ]
  }
};
