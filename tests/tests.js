/**
 * Created by john on 3/16/16.
 */

var should = require('should');
var assert = require('assert');
describe('Test Framework', function () {
    it('should have mocha installed and running.', function () {
        assert.equal(true, true);
    })
    it('should have the should library installed and running for a fluent test', function () {
        true.should.eql(true);
    })
})