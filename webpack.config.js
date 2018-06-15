var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
		
		{
			// Do not transform vendor's CSS with CSS-modules
			// The point is that they remain in global scope.
			// Since we require these CSS files in our JS or CSS files,
			// they will be a part of our compilation either way.
			// So, no need for ExtractTextPlugin here.
			test: /\.css$/,
			include: /node_modules/,
			loader: 'style-loader!css-loader'
		}
      ]
   },
   mode : 'development',
}
module.exports = config;