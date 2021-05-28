const path = require('path');

module.exports = {
	target: 'electron-main',
	entry: {
		index: path.join(__dirname, '../index.js')
	},
	output: {
		filename: 'index.js',
		path: path.join(__dirname, '../dist')
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.js$/
			}
		]
	}
};