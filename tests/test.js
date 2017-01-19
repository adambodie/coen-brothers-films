var chai = require('chai');
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var year = 2017;
var date = new Date("January 1, 2017 11:13:00");

describe('Copyright', function() {

  it('matches year', function() {
    expect(year).to.equal(date.getFullYear());
  });
  it('should not be a string', function() {
    assert.isNotString(year);
  });
});
