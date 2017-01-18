var chai = require('chai');
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();  // Using Should style
var year = 2017;
var date = new Date();

describe('Copyright', function() {

  it('matches year', function() {
    expect(year).to.equal(date.getFullYear());
  });

});
