'use strict';

const expect = require('chai').expect;
const setupTest = require('ember-fastboot-addon-tests').setupTest;

describe('otherPage', function() {
  setupTest('fastboot'/*, options */);

  it('renders', function() {
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