const path = require('path');
const ReadmetWebpackPlugin = require('./plugins/readme-webpack-plugin')

module.exports = {
  mode:'development',
  entry: './src/index.js',
  plugins:[
    new ReadmetWebpackPlugin({
      name:'hfj'
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};