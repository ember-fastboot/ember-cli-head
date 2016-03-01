/* jshint node: true */
'use strict';

var filterInitializers = require('fastboot-filter-initializers');

module.exports = {
  name: 'ember-cli-head',
  isDevelopingAddon: function() {
    return true;
  },

  treeForApp: function(tree) {
    return filterInitializers(tree);
  }
};
