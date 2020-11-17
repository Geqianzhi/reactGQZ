  
const CracoLessPlugin = require('craco-less');
const WebpackBar = require('webpackbar');
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#2266FF' },
            javascriptEnabled: true,
          },
        },
      },
    }
  ],
  babel:{
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]]
     
  },
  webpack:{
    plugins:[
        new WebpackBar()
    ]
  },
  devServer:{
    host: "0.0.0.0",//主机地址
    port: 8888,//端口号
    open: false,
  }
};