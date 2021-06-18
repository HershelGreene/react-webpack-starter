const HtmlWebpackPlugin = require("html-webpack-plugin");
const Path = require("path");

const config = {
  entry: "./src/index.js",
  mode: "development",
  resolve: {
    alias: {
      Components: Path.resolve(__dirname, "src/Components"),
      Assets: Path.resolve(__dirname, "src/Assets"),
      Constants: Path.resolve(__dirname, "src/Constants"),
      Modules: Path.resolve(__dirname, "src/Modules"),
      Utils: Path.resolve(__dirname, "src/Utils"),
      HOCs: Path.resolve(__dirname, "src/HOCs"),
    },
    extensions: [".js", ".jsx"],
  },
  output: {
    path: Path.resolve(__dirname, "build"),
    filename: "main.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/htmlTemplate.html" })],
  devServer: {
    historyApiFallback: true,
  },
};

module.exports = config;
