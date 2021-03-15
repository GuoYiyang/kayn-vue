module.exports = {
    devServer: {
        port: 9999,
        proxy: {
            '/api':{
                target:'http://localhost:8888',
                changeOrigin:true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
