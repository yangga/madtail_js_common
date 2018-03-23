const assert = require('assert')
const LIB = require('../index')

describe('string.prototype', function() {
  describe('#padEnd()', function() {
    it(`injecting`, function() { 
      String.prototype.padEnd = LIB.string.prototype.padEnd
      assert.ok(String.prototype.padEnd)      
    });
    it(`padEnd test`, function() {
      const res = '0.'.padEnd(5, '0')
      assert.equal(res, '0.000')
    });
  });
});