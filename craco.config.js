  
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
    port: 8792,//端口号
    open: false,
    proxy: { //设置代理,可解决跨5
      "/api": {
        target: "http://192.168.1.87:9000/",
        changeOrigin: true,
        pathRewrite: {//地址重写
          '^/api': "/"
        }
      },
    }
  }
};