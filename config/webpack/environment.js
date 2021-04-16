const { environment } = require('@rails/webpacker')

environment.loaders.prepend('html', {
    test: /\.html$/,
    exclude: /node_modules/,
    loaders: ['html-loader']
})

module.exports = environment
