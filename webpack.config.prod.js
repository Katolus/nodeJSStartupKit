import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
    // Dynamically generated references for .js files
  },
  plugins: [
    // Generate an external css file with a hash in the filename (to not translate CSS to JS) 
    new ExtractTextPlugin('[name].[chunkhash].css'),

    // Use CommonChunkPlugin to create a separate bundle
    // of vendor libraries so that they're cached separately
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    // Hash the files using MD5 so that thier names change when the content changes
    new WebpackMd5Hash(),

    // Create Html file that includes references to bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments:true,
        collapseWhitespace:true,
        useShortDoctype:true,
        removeAttributeQuotes:true,
        removeStyleLinkTypeAttributes:true,
        keepClosingSlash:true,
        minifyJS:true,
        minifyCSS:true,
        minifyURLs:true //This variable minifies html to save space
      },
      inject: true,
      
      // Properties we define here are available in index.html
      // using htmlWebpackPlugin.options.varName
      trackJSToken: 'This should include appropriate token' 
    }),

    // Minify JS - trims code to the minimum removing whitespace etc.
    new webpack.optimize.UglifyJsPlugin(),

    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin()

  ],
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?sourceMap')
      }
    ]
  }
}
