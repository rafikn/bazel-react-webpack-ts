const path = require('path');

module.exports = {
  resolve: {
    alias: {
      //TODO: find a better way to handle this
      "@components" : path.resolve(__dirname, "../bazel-out/darwin-fastbuild/bin/frontend/src/components/")
    },
    symlinks: false
  },
  module: {
    // TODO: add style loader
  },
};