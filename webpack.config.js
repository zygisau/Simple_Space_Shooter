const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
    './src/css/index.css'
  ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.css$/, 
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },

  devServer: {
    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: "0.0.0.0";
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    open: true, // Open the page in browser
    overlay: true, // Show compilation related warnings and errors
    contentBase: path.join(__dirname, 'dist'), // Tell webpack server to serve index.html for any route
    compress: false,
  },
};