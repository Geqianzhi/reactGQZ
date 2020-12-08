  
const CracoLessPlugin = require('craco-less');
const WebpackBar = require('webpackbar');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');
module.exports = {
  plugins: [
    // {
    //   plugin:reactHotReloadPlugin
    // },
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
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true}],//设置为true即是less
    ]
     
  },
  webpack:{
    plugins:[
        new WebpackBar(),
        new UglifyJsPlugin({
          uglifyOptions: {
              compress: {
                  warnings: false,
                  drop_debugger: true,
                  drop_console: true,
              },
          },
          sourceMap: false,
          parallel: true,
      }),
    ]
  },
  devServer:{
    host: "0.0.0.0",//主机地址
    port: 8792,//端口号
    open: false,
    hot:true,
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