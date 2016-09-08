/* jshint node: true */
'use strict';

var path = require('path');
var filterInitializers = require('fastboot-filter-initializers');
var VersionChecker = require('ember-cli-version-checker');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-head',

  treeForApp: function(defaultTree) {
    var checker = new VersionChecker(this);
    var emberVersion = checker.for('ember', 'bower');

    var trees = [defaultTree];

    if (emberVersion.lt('2.9.0-alpha.4')) {
      trees.push(this.treeGenerator(path.resolve(this.root, 'app-lt-2-9')));
    }

    var tree = mergeTrees(trees, { overwrite: true });

    return filterInitializers(tree);
  }
};
