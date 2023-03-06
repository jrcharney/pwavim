import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackPWAManifest from "webpack-pwa-manifest";
import { InjectManifest } from "workbox-webpack-plugin";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
*/

//module.exports = 
export default () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // TODO: Add and configure workbox plugins for a service worker and manifest file.
      // TODO: Add CSS loaders and babel to webpack.
    ],
    module: {
      rules: [
        // TODO: Or are those rules supposed to go here?
      ],
    },
  };
};
