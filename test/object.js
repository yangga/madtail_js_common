const assert = require('assert')
const LIB = require('../index')

describe('object', function() {
  describe('#recursive', function() {
    it(`set`, function() { 
      let o = {id : 1}
      LIB.object.setValueRecursive(o, 'profile', 'name', 'yangga')
      assert.equal(o.profile.name, 'yangga')
    });
    it(`get`, function() { 
      let o = {
        profile:{
          name: 'yangga'
        }
      }
      const value = LIB.object.getValueRecursive(o, 'profile', 'name')
      assert.equal(value, 'yangga')
    });
  });
});