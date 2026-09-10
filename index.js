'use strict';

const Filter = require('broccoli-persistent-filter');

class ServiceImportReplacer extends Filter {
  constructor(inputNode, search, replace, options = {}) {
    super(inputNode, {
      annotation: options.annotation,
    });
    this.extensions = ['js'];
    this.targetExtension = 'js';
  }
  processString(content) {
    return content.replace(
      `import { service } from '@ember/service';`,
      `import { inject as service } from '@ember/service';`,
    );
  }
}

let checker;
function getVersionChecker(context) {
  if (!checker) {
    const VersionChecker = require('ember-cli-version-checker');
    checker = new VersionChecker(context);
  }
  return checker;
}

module.exports = {
  name: require('./package').name,

  treeForAddon(tree) {
    if (this._getEmberVersion().lt('4.1.0')) {
      return this._super.treeForAddon.call(
        this,
        new ServiceImportReplacer(tree),
      );
    }

    return this._super.treeForAddon.call(this, tree);
  },

  _getEmberVersion() {
    const checker = getVersionChecker(this.project);
    const emberVersionChecker = checker.for('ember-source', 'npm');

    if (emberVersionChecker.version) {
      return emberVersionChecker;
    }

    return checker.for('ember', 'bower');
  },
};
