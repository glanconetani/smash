const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const js = {
  test: /\.m?(js|jsx)$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader'
  }
}

const css = {
  test: /\.css$/,
  use: ['style-loader','css-loader']
}

const png = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  loader: "url-loader?name=app/images/[name].[ext]"
}


const serverConfig = {
  mode: 'development',
  target: 'node',
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  entry: {
    'index.js': path.resolve(__dirname, 'server/server.js')
  },
  module: {
    rules: [js, png]

  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]'
  }
}

const clientConfig = {
  mode: 'development',
  target: 'web',
  entry: {
    'index.js': path.resolve(__dirname, 'client/src/index.js')
  },
  module: {
    rules: [js, css, png]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: '[name]'
  }
}

module.exports = 
  [serverConfig, clientConfig]

