const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: {
		index: "./src/index.ts",
		// main: "./src/main.ts",
	},

	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true, // cleans dist folder before each build
	},

	resolve: {
		extensions: [".ts", ".js"], // allows importing without specifying extensions
	},

	module: {
		rules: [
			// TypeScript
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			// Images
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset/resource",
			},
			// CSS
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
			},
		],
	},

	plugins: [
		// Generates index.html for the 'index' chunk
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "index.html",
			chunks: ["index"],
		}),

		// Generates main.html for the 'main' chunk
		// new HtmlWebpackPlugin({
		// 	template: "./public/main.html",
		// 	filename: "main.html",
		// 	chunks: ["main"],
		// }),

		// Extracts CSS into separate files
		new MiniCssExtractPlugin({
			filename: "[name].bundle.css",
		}),
	],

	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		port: 3000,
		open: true,
		historyApiFallback: {
			rewrites: [
				{ from: /^\/$/, to: "/index.html" }, // default route
				// { from: /^\/main$/, to: "/main.html" }, // /main route
			],
		},
	},

	mode: "development",
};
