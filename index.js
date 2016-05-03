/* jshint node: true */
'use strict';

var filterInitializers = require('fastboot-filter-initializers');

module.exports = {
  name: 'ember-cli-head',

  treeForApp: function(tree) {
    return filterInitializers(tree);
  }
};
