const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require('path');
// const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

const config = {

    entry: './public/js/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
      },

    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        }),
        new BundleAnalyzerPlugin({
          analyzerMode: 'static'
        }),
        new WebpackPwaManifest({
            name: "Budget Tracker",
            short_name: "Budget",
            description: "An app for avoiding overdraft fees",
            background_color: "#33ACFF",
            theme_color: "#B910FD",
            fingerprints: false,
            inject: false,
            icons: [{
            src: path.resolve("./public/icons/icon-192x192.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: './public/icons'
            }]
        })
      ],

    mode: 'development'

};

module.exports = config