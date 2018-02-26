const assert = require('assert')
const LIB = require('../index')

describe('mod.loader', function() {
  describe('#loadModulesInDirectory()', function() {
    it('result is equal', function() {
        // load module dynamically
        const moduleList = LIB.mod.loader.loadModulesInDirectory('path.js', __dirname+'/../lib/fs')
        // path.normalize
        const res1 = moduleList[0].mod && moduleList[0].mod.normalize(__dirname+'/../lib/fs')
        
        // load module statically
        const ModulePath = require('../lib/fs/path')
        const res2 = ModulePath.normalize(__dirname+'/../lib/fs')

        // result must be same
        assert.equal(res1, res2)
    });
  });
});