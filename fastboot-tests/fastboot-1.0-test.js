/* eslint-env node */
'use strict';

const expect = require('chai').expect;
const setupTest = require('ember-fastboot-addon-tests').setupTest;

describe('FastBoot 2.0', function() {
  setupTest('fastboot', {
    emberCliFastbootVersion: '2.0.0',
    emberVersion: 'latest'
  });

  it('index page', function() {
    return this.visit('/')
      .then(function(res) {
        let $ = res.jQuery;
        let response = res.response;

        expect(response.statusCode).to.equal(200);
        expect($('h1').text().trim()).to.equal('Hello page');
        expect($('meta[property="og:title"]', 'head').attr('content')).to.equal('Hello page');
      });
  });

  it('other page', function() {
    return this.visit('/other-page')
      .then(function(res) {
        let $ = res.jQuery;
        let response = res.response;

        expect(response.statusCode).to.equal(200);
        expect($('h1').text().trim()).to.equal('Other page');
        expect($('meta[property="og:title"]', 'head').attr('content')).to.equal('Other page');
      });
  });

});
