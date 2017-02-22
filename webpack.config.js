const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: [
    './src/app/client.js'
  ],
  output: {
    path: path.join(__dirname, '/docs'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.jsx', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ["es2015", "react", "stage-0"]
        }
      }, {
        test: /(\.scss|.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1!postcss!sass')
      }
    ]
  },
  postcss: [autoprefixer],
  sassLoader: {
    includePaths: [path.resolve(__dirname, './src/app')]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

if (process.env.NODE_ENV !== 'production') {
    config.entry.push('webpack-hot-middleware/client?http://localhost:8080');
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
