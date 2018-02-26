var assert = require('assert');
describe('fs.filesearch', function() {
  describe('#getAllFilesInDirectory()', function() {
    it('should has files', function() {
        const LIB = require('../index')
        const list = LIB.fs.filesearch.getAllFilesInDirectory(__dirname)
        assert.ok(0 < list.length)
    });
  });
});