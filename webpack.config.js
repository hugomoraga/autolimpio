const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: "./src/_bundle/main.js",
  mode: process.env.NODE_ENV,
  module: {
    rules:[
      {
        test: /\.(scss|css)$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    importLoaders: 2,
                    sourceMap: true,
                    url: false,
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [
                            'autoprefixer',
                        ]
                    }
                }
            },
            'sass-loader'
        ],
    },
    ]
 },
  output: {
    path: path.resolve(__dirname, "dist", "assets"),
    filename: "main.bundle.js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/assets/js/", to: "js/" }
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
  }),
    
  ]
};