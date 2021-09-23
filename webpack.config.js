const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   mode: 'production',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   },
   performance: { hints: false },
//    devServer: {
//       inline: false,
//       port: 8001
//    },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            use: 'babel-loader',
         },
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
         test: /\.(png|jpe?g|gif)$/i,
         loader: 'file-loader',
         options: {
         outputPath: 'images',
            },
        },
        
        {
         test: /\.svg$/,
         use: [
           {
             loader: 'svg-url-loader',
             options: {
               limit: 10000,
             },
           },
         ],
       },

      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './public/index.html'
      }),
   ],
}