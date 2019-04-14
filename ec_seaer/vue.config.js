const webpack = require('webpack')

// require('swiper/dist/js/swiper')

module.exports = {
    css: {
        loaderOptions: { // 向 CSS 相关的 loader 传递选项
            sass: {
                data: `@import "@/style/index.scss";`
            }
        }
    },
    devServer: {
        proxy: 'http://yapi.demo.qunar.com/mock/32239/api',
        overlay: {
            warnings: false,
            errors: true
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                Swiper: 'swiper/dist/js/swiper'
            })
        ]
    }
}