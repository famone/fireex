const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/fireex/',
  transpileDependencies: true,
  pwa: {
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-transculent',
    themeColor: '#FFFFFF'
  }
})
