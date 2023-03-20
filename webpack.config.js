// Generated using webpack-cli https://github.com/webpack/webpack-cli

import path from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import WorkboxWebpackPlugin from 'workbox-webpack-plugin'

const stylesHandler = MiniCssExtractPlugin.loader
const __filename = fileURLToPath(import.meta.url)

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(path.dirname(__filename), 'dist'),
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),

    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    alias: {
      actions: path.resolve(path.dirname(__filename), 'src/actions/'),
      stylesheets: path.resolve(path.dirname(__filename), 'src/stylesheets/'),
    },
  },
}

export default () => {
  if (process.env.NODE_ENV === 'production') {
    config.mode = 'production'

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW())
  } else {
    config.mode = 'development'
  }
  return config
}

