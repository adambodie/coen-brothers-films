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




describe('Description', function() {
  var replaceDescription = require('../src/js/description.js');
  var expectedValue = `<div id="description">\n\t <div id="review">\n\t\t <h1>Test</h1>\n\t\t <div id="info">\n\t\t <h4>1999</h4>\n\t\t <h4>Starring Stars</h4>\n\t\t <p>Review</p>\n\t\t </div>\n\t </div>\n\t</div>`;
  var arr = [{
  	"title": "Test",
    "image": "test",
  	"year": 1999,
  	"starring": "Stars",
  	"review": "Review",
  },{
  	"title": "Test2",
    "image": "test2",
  	"year": 1998,
  	"starring": "Stars 2",
  	"review": "Review 2",
  }]
  it('returns correct index', function() {
    expect(replaceDescription(arr[0].title, arr[0].year, arr[0].starring, arr[0].review)).to.equal(expectedValue);
  });

});
