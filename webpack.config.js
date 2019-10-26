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
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: true
        }
      }
    ]
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
    rules: [js]
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
    rules: [js, css]
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

module.exports = [serverConfig, clientConfig]
