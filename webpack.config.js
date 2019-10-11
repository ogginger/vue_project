//webpack.config.js: Webpack configuration file for the application.

var path = require("path");
var webpack = require("webpack");

module.exports = {
    "entry": "./src/index.js",
    "mode": "production", //Actually in development but throws error for chrome extension development.
    "optimization": {
        "minimize": false //for debugging.
    },
};