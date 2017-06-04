/* eslint-env node */
'use strict';

const path = require('path');
const filterInitializers = require('fastboot-filter-initializers');
const VersionChecker = require('ember-cli-version-checker');
const mergeTrees = require('broccoli-merge-trees');
const semver = require('semver');

module.exports = {
  name: 'ember-cli-head',

  treeForApp(defaultTree) {
    let fastboot = this.project.findAddonByName('ember-cli-fastboot');

    if (fastboot && semver.lte(fastboot.pkg.version, '1.0.0-rc.1')) {
      let trees = [defaultTree];

      if (!this.hasGlimmer2()) {
        trees.push(this.treeGenerator(path.resolve(this.root, 'app-lt-2-10')));
        trees.push(this.treeGenerator(path.resolve(this.root, 'fastboot-lt-2-10')));
      }

      let tree = mergeTrees(trees, { overwrite: true });

      return filterInitializers(tree);
    } else {
      let trees = [defaultTree];
      if (!this.hasGlimmer2()) {
        trees.push(this.treeGenerator(path.resolve(this.root, 'app-lt-2-10')));
      }

      return mergeTrees(trees, { overwrite: true });
    }
  },

  treeForFastBoot(tree) {
    // this hook will be invoked in post FastBoot 1.0
    if (!this.hasGlimmer2) {
      let fastBootHtmlBarsTree = this.treeGenerator(path.resolve(this.root, 'fastboot-lt-2-10'));
      return tree ? mergeTrees([tree, fastBootHtmlBarsTree], { overwrite: true }) : fastBootHtmlBarsTree;
    }
    return tree;
  },

  hasGlimmer2() {
    let checker = new VersionChecker(this);
    let emberVersion = checker.for('ember-source', 'npm');

    if (!emberVersion.version) {
      emberVersion = checker.for('ember', 'bower');
    }

    // 2.9.0-beta.1 - 2.9.0-beta.5 used glimmer2 (but 2.9.0 did not)
    // 2.10.0-beta.1+ includes glimmer2
    return (emberVersion.gt('2.9.0-beta') && emberVersion.lt('2.9.0')) || emberVersion.gt('2.10.0-beta');
  }
};
