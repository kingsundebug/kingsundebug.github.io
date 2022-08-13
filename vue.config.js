
module.exports = {
  lintOnSave: false,
  outputDir: 'dist',
  assetsDir: 'static',
  configureWebpack: {
    devtool: 'source-map', // 调试模式
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        views: '@/views',
        vue$: 'vue/dist/vue.esm.js'
      }
    }
  },
  devServer: {
    port: 3000, // 本机端口号
    // host: "localhost", //本机主机名
    https: false, // 协议
    open: true // 启动服务器时自动打开浏览器访问

  }

}
