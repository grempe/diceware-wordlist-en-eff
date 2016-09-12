var expect = require('chai').expect,
	_ = require('lodash'),
	combinatorics = require('js-combinatorics'),
    scapegoat = require('../index');

describe('wordlist', function() {
  it('should have 7776 entries', function() {
    expect(_.keys(scapegoat).length).to.equal(7776);
  });

  it('should have all possible 5-dice rolls', function() {
  	var cmb = combinatorics.baseN(['1','2','3','4', '5', '6'], 5);
	var cnt = 0;
	while(dice = cmb.next()) {
		dice_str = dice.join('');
		expect(scapegoat[dice_str], "combination: "+dice_str).to.be.a('string');
	}
  });

  it('should have unique words', function() {
  	var values = _.values(scapegoat);
  	var unique = _.uniq(values);
    expect(values.length).to.equal(_.uniq(values).length);
  });
});
