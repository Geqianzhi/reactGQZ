
const { override, fixBabelImports ,addLessLoader,addWebpackPlugin} = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const darkThemeVars = require('antd/dist/dark-theme');
module.exports = override(
      fixBabelImports('import', {
         libraryName: 'antd',
         libraryDirectory: 'es',
         style: true,
       }),
      addLessLoader({
            javascriptEnabled: true,
            odifyVars: { '@primary-color': '#1DA57A' },
            // modifyVars: {
            //           'hack': `true;@import "${require.resolve('antd/lib/style/color/colorPalette.less')}";`,
            //           ...darkThemeVars,
            //             '@primary-color': '#1DA57A'
            // },
            // "@primary-color": "#1890ff", // 全局主色
            // "@link-color": "#1890ff", // 链接色
            // "@success-color":" #52c41a",// 成功色
            // "@warning-color":" #faad14", // 警告色
            // "@error-color":" #f5222d", // 错误色
            // "@font-size-base": "14px", // 主字号
            // "@heading-color": "rgba(0, 0, 0, 0.85)", // 标题色
            // "@text-color":" rgba(0, 0, 0, 0.65)", // 主文本色
            // "@text-color-secondary":" rgba(0, 0, 0, 0.45)", // 次文本色
            // "@disabled-color": "rgba(0, 0, 0, 0.25)", // 失效色
            // "@border-radius-base":" 0 2px 8px rgba(0, 0, 0, 0.15)" // 浮层阴影
      }),

      addWebpackPlugin(new AntdDayjsWebpackPlugin())
 );