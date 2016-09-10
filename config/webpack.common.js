const webpack = require('webpack');
const helpers = require('./helpers');
const path = require('path');
const appVendor = require('./../src/main.vendor');

/*
 * Webpack Plugins
 */
// problem with copy-webpack-plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlElementsPlugin = require('./html-elements-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/*
 * Webpack Constants
 */
const METADATA = {
  title: 'Angular Webapp Starter Bootstrap',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer()
};

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {

  /*
   * Static metadata for index.html
   *
   * See: (custom attribute)
   */
  metadata: METADATA,

  /*
   * Cache generated modules and chunks to improve performance for multiple incremental builds.
   * This is enabled by default in watch mode.
   * You can pass false to disable it.
   *
   * See: http://webpack.github.io/docs/configuration.html#cache
   */
  //cache: false,

  /*
   * The entry point for the bundle
   * Our Angular.js app
   *
   * See: http://webpack.github.io/docs/configuration.html#entry
   */
  entry: {
    'lib': [
      'jquery',
      'moment',
      'lodash',
      'angular'
    ],
    'vendor': appVendor.vendors,
    'main': './src/main.browser.js'
  },

  /*
   * Options affecting the resolving of modules.
   *
   * See: http://webpack.github.io/docs/configuration.html#resolve
   */
  resolve: {

    /*
     * An array of extensions that should be used to resolve modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
     */
    extensions: ['', '.js', '.json'],

    // Make sure root is src
    root: helpers.root('src'),

    // remove other default values
    modulesDirectories: ['node_modules'],

    alias: {
      jquery: require.resolve('jquery') // make jquery global
    }
  },

  /*
   * Options affecting the normal modules.
   *
   * See: http://webpack.github.io/docs/configuration.html#module
   */
  module: {

    preLoaders: [
      {test: /\.js$/, loader: 'eslint-loader', include:[/src\/app/], exclude: [/node_modules/, /\.(spec|e2e)\.js$/, /jquery/]}
    ],

    /*
     * An array of automatically applied loaders.
     *
     * IMPORTANT: The loaders here are resolved relative to the resource which they are applied to.
     * This means they are not resolved relative to the configuration file.
     *
     * See: http://webpack.github.io/docs/configuration.html#module-loaders
     */
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'ng-annotate-loader',
          'babel-loader'
        ],
        exclude: [/node_modules/, /\.(spec|e2e)\.js$/]
      },

      /*
       * Json loader support for *.json files.
       *
       * See: https://github.com/webpack/json-loader
       */
      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      /*
       * to string and css loader support for *.css files
       * Returns file content as string
       *
       */
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'to-string-loader!css-loader!resolve-url-loader'
        })
        // loaders: ['to-string-loader', 'css-loader', 'resolve-url-loader']
      },

      /* Raw loader support for *.html
       * Returns file content as string
       *
       * See: https://github.com/webpack/raw-loader
       */
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      },

      /* File loader for supporting images, for example, in CSS files.
       */
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file'
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        // loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
        // loaders: ['style-loader', 'css-loader', 'resolve-url-loader', /*'postcss-loader', */'sass-loader']
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!resolve-url-loader!sass-loader'
        })
      },

      {test: /\.(svg|woff|woff2|ttf|eot)$/, loader: "file?name=/assets/fonts/[name].[ext]"},
      {test: /\.(png|jpg|jpeg|gif|bmp)$/, loader: "file?name=/assets/images/[name].[ext]"}
    ]

  },

  /*
   * Add additional plugins to the compiler.
   *
   * See: http://webpack.github.io/docs/configuration.html#plugins
   */
  plugins: [

    /*
     * Plugin: CommonsChunkPlugin
     * Description: Shares common code between the pages.
     * It identifies common modules and put them into a commons chunk.
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
     * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
     */
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['polyfills', 'vendor'].reverse()
    // }),

    /*
     * Plugin: CopyWebpackPlugin
     * Description: Copy files and directories in webpack.
     *
     * Copies project static assets.
     *
     * See: https://www.npmjs.com/package/copy-webpack-plugin
     */
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: 'assets'
    }]),

    /*
     * Plugin: HtmlWebpackPlugin
     * Description: Simplifies creation of HTML files to serve your webpack bundles.
     * This is especially useful for webpack bundles that include a hash in the filename
     * which changes every compilation.
     *
     * See: https://github.com/ampedandwired/html-webpack-plugin
     */

    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      // chunksSortMode: 'dependency'
      chunksSortMode: helpers.packageSort(['lib', 'vendor', 'main'])
    }),

    /*
     * Plugin: HtmlHeadConfigPlugin
     * Description: Generate html tags based on javascript maps.
     *
     * If a publicPath is set in the webpack output configuration, it will be automatically added to
     * href attributes, you can disable that by adding a "=href": false property.
     * You can also enable it to other attribute by settings "=attName": true.
     *
     * The configuration supplied is map between a location (key) and an element definition object (value)
     * The location (key) is then exported to the template under then htmlElements property in webpack configuration.
     *
     * Example:
     *  Adding this plugin configuration
     *  new HtmlElementsPlugin({
     *    headTags: { ... }
     *  })
     *
     *  Means we can use it in the template like this:
     *  <%= webpackConfig.htmlElements.headTags %>
     *
     * Dependencies: HtmlWebpackPlugin
     */
    new HtmlElementsPlugin({
      headTags: require('./head-config.common')
    }),


    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),

    new ExtractTextPlugin("assets/css/styles.[hash].css"), // extract inline-css to file
    // new webpack.optimize.CommonsChunkPlugin({names: ['lib', 'vendor', 'main'], minChunks: Infinity}),
    // new webpack.optimize.OccurrenceOrderPlugin(true),
    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    // new webpack.optimize.CommonsChunkPlugin({name: "vendor.lib", filename: "[name].[hash].bundle.js", minChunks: Infinity}),
    // new webpack.optimize.CommonsChunkPlugin({name: "vendor.jquery", filename: "[name].[hash].bundle.js", minChunks: Infinity}),
    // new webpack.optimize.CommonsChunkPlugin({name: "vendor.angular", filename: "[name].[hash].bundle.js", minChunks: Infinity})
  ],

  /*
   * Include polyfills or mocks for various node stuff
   * Description: Node configuration
   *
   * See: https://webpack.github.io/docs/configuration.html#node
   */
  node: {
    global: 'window',
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};
