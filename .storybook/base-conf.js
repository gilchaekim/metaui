const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve:{
    alias:{
      '@':path.resolve(__dirname, '../'),
      '@stories':path.resolve(__dirname, '../stories/'),
    },
  },
};
