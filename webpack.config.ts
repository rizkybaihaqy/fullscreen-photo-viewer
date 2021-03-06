import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebPackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";

interface WebpackConfiguration extends Configuration {
  devServer?: DevServerConfiguration;
}

export default function build(env: any, arg: any): WebpackConfiguration {
  return {
    entry: {
      index: ["regenerator-runtime/runtime", "./src/index.ts"],
    },
    output: {
      path: path.join(__dirname, "dist"),
      chunkFilename: "chunks/[id].js",
      publicPath: "",
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "./dist"),
      },
      compress: true,
      port: 3000,
      devMiddleware: {
        writeToDisk: true,
      },
    },
    mode: arg.mode,
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, "src"),
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [`...`, new CssMinimizerPlugin()],
    },
    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),

      new MiniCssExtractPlugin({
        filename: "[name].bundle.css",
        chunkFilename: "[id].css",
      }),

      new HtmlWebPackPlugin({
        title: "Fullscreen Photo Viewer",
        template: "src/index.html",
        filename: "index.html",
      }),
    ],
    resolve: {
      modules: [
        path.resolve(__dirname, "/src"),
        path.resolve(__dirname, "node_modules/"),
      ],
      extensions: [".ts", ".tsx", ".js", ".css"],
    },
  };
}
