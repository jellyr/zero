﻿var path = require('path')


const entryPath = path.resolve(__dirname, './build/main.js');
const outputPath = path.resolve(__dirname, './view');

module.exports = {
  // devtool: 'source-map',
    entry:  [
      entryPath,
      // __dirname + '/view/main.js'

  ]
 ,
    output: {
      path: outputPath , // 输出文件的保存路径
      filename: 'bundle.js' // 输出文件的名称
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
    ]
  }
};

