const assert = require('assert')
const LIB = require('../index')

describe('fs.filesearch', function() {
  describe('#getAllFilesInDirectory()', function() {
    it('should has files', function() {        
        const list = LIB.fs.filesearch.getAllFilesInDirectory(__dirname)
        assert.ok(0 < list.length)
    });
  });
});