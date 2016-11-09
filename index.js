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

    // 2.9.0-beta.1 - 2.9.0-beta.5 used glimmer2 (but 2.9.0 did not)
    // 2.10.0-beta.1+ includes glimmer2
    if (!(emberVersion.gt('2.9.0-beta') && emberVersion.lt('2.9.0')) && !emberVersion.gt('2.10.0-beta')) {
      trees.push(this.treeGenerator(path.resolve(this.root, 'app-lt-2-10')));
    }

    var tree = mergeTrees(trees, { overwrite: true });

    return filterInitializers(tree);
  }
};
