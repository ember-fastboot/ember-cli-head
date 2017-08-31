/*jshint node:true*/
let fs = require('fs');
let path = require('path');
let chalk = require('chalk');

module.exports = {
  description: '',
  normalizeEntityName: function() { },
  afterInstall() {
    let fullPath = path.join(this.project.root, 'app/templates/application.hbs');

    if (fs.existsSync(fullPath)) {
      let contents = fs.readFileSync(fullPath, { encoding: 'utf-8' });
      let toWrite = `{{head-layout}}\n${contents}`;

      fs.writeFileSync(fullPath, toWrite, { encoding: 'utf-8' });
    } else {
      let str = `You must add {{head-layout}} component to your topmost UI.
This is usually your app/templates/application.hbs, but was not found on your system.
Please see the README for more instructions https://github.com/ronco/ember-cli-head#upgrade-to-04x.`

      this.ui.writeLine(chalk.yellow(str));
    }
  }

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
