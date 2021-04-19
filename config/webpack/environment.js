const { environment } = require('@rails/webpacker')

environment.loaders.prepend('html', {
    test: /\.html$/,
    exclude: /node_modules/,
    loaders: ['html-loader']
})

environment.loaders.insert('sass', {
    test: /\.scss$/,
    use: [
        "to-string-loader",
        "css-loader",
        "resolve-url-loader",
        "sass-loader"
    ]
})

// environment.loaders.append('style', {
//     test: /\.(scss|sass|css)$/,
//     use: [{
//         loader: "to-string-loader"
//     }, {
//         loader: "css-loader"
//     }, {
//         loader: "resolve-url-loader"
//     }, {
//         loader: "sass-loader"
//     }]
// })

module.exports = environment
