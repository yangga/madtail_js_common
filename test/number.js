const assert = require('assert')
const LIB = require('../index')

describe('number.float', function() {
  describe('#toFixed()', function() {
    it('result is not string', function() {        
      const res = LIB.number.float.toFixed(0.12345, 2)
      assert.equal(res, 0.12)
    });
    it('0 does not have decimal point', function() {        
      const res = LIB.number.float.toFixed(0.00123, 2)
      assert.equal(res, 0)
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