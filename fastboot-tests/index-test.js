'use strict';

const expect = require('chai').expect;
const setupTest = require('ember-fastboot-addon-tests').setupTest;

describe('index', function() {
  setupTest('fastboot'/*, options */);

  it('renders', function() {
    return this.visit('/')
      .then(function(res) {
        let $ = res.jQuery;
        let response = res.response;

        expect(response.statusCode).to.equal(200);
        expect($('h1').text().trim()).to.equal('Hello page');
        expect($('meta[property="og:title"]', 'head').attr('content')).to.equal('Hello page');
      });
  });

});