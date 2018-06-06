assert = require('assert');
aws = require('../lib/aws');
checkStringIsXML = aws.checkStringIsXML;
xmlStringPattern = '<?xml version="1.0"?>';
otherStringPattern = '<HTML>'

describe('checkStringXML fn', function () {
    it('should return true for string with xml patterns', function () {
        console.log('testing check string is XML');
        assert.equal(checkStringIsXML(xmlStringPattern), true);
    });
    it('should return false for string with other than xml pattern', function () {
        assert.equal(checkStringIsXML(otherStringPattern), false);
    });
});