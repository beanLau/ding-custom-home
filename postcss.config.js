module.exports = {
    plugins: [
        require('postcss-pxtorem')({
            rootValue: 100,
            propWhiteList: [],
        }),
        require('postcss-cssnext')(),
    ]
}