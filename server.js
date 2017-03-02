const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const internalIp = require('internal-ip');
const express = require('express');
const webpack = require('webpack');
const path = require('path');

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  silent: false,
  stats: { colors: true }
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './docs/index.html'));
});

const port = 8080;
const ip = internalIp.v4();

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(' --------------------------------------');
  console.log(`    Local: http://0.0.0.0:${port}`);
  console.log(` External: http://${ip}:${port}`);
  console.log(' --------------------------------------');
});
