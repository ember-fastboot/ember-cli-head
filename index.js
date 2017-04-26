/* eslint-env node */
'use strict';

const path = require('path');
const VersionChecker = require('ember-cli-version-checker');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-head',

  treeForApp(defaultTree) {
    let checker = new VersionChecker(this);
    let emberVersion = checker.for('ember-source', 'npm');

    if (!emberVersion.version) {
      emberVersion = checker.for('ember', 'bower');
    }

    let trees = [defaultTree];

    // 2.9.0-beta.1 - 2.9.0-beta.5 used glimmer2 (but 2.9.0 did not)
    // 2.10.0-beta.1+ includes glimmer2
    if (!(emberVersion.gt('2.9.0-beta') && emberVersion.lt('2.9.0')) && !emberVersion.gt('2.10.0-beta')) {
      trees.push(this.treeGenerator(path.resolve(this.root, 'app-lt-2-10')));
    }

    return mergeTrees(trees, { overwrite: true });
  }
};
