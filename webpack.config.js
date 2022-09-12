const Dotenv = require('dotenv-webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [new Dotenv()],
  rules: [{
    test: /\.scss$/,
    use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                minimize: true,
                sourceMap: true
            }
        },
        {
            loader: "sass-loader"
        }
    ]
}
]
}
