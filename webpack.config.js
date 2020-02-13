const path = require('path')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
  const isProduction = env === 'production'
  // const CSSExtract = new ExtractTextPlugin('styles.css')
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' })

  console.log('env', env)
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        // use: CSSExtract.extract({
        //   use: [
        //     'css-loader',
        //     'sass-loader'
        //   ]
        // })
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true // tells dev-server we're handling routing via clientside code, will run index.html if 404 gets returned
    }
  };
}