const assert = require('assert')
const LIB = require('../index')

describe('number.float', function() {
  describe('#round()', function() {
    it('result is string', function() {        
      const res = LIB.number.float.round(0.12345, -2)
      assert.equal(res, '0.12')
    });
    it('no 0 on tail of decimal point', function() {        
      const res = LIB.number.float.round(0.00120000, -6)
      assert.equal(res, '0.0012')
    });
  });

  describe('#toFixed()', function() {
    it('result is string', function() {        
      const res = LIB.number.float.toFixed(0.12345, 2)
      assert.equal(res, '0.12')
    });
    it('has 0 on tail of decimal point', function() {        
      const res = LIB.number.float.toFixed(0.00120000, 6)
      assert.equal(res, '0.001200')
    });
  });
});

describe('number.money', function() {
  describe('#formatDecimals()', function() {
    it(`formatting money. 123456.789 -> '123,456.79'`, function() {        
      const res = LIB.number.money.formatDecimals(123456.789, 2)
      assert.equal(res, '123,456.79')
    });
  });
});