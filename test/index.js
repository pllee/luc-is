var is = require('../index'),
    expect = require('expect.js');

describe('Luc is', function() {

    it('isArray', function() {
        expect(is.isArray({})).to.be(false);
        expect(is.isArray([])).to.be(true);
    });

    it('isRegExp', function() {
        expect(is.isRegExp({})).to.be(false);
        expect(is.isRegExp(new RegExp())).to.be(true);
    });

    it('isDate', function() {
        expect(is.isDate({})).to.be(false);
        expect(is.isDate(new Date())).to.be(true);
    });

    it('isString', function() {
        expect(is.isString({})).to.be(false);
        expect(is.isString(new String())).to.be(true);
        expect(is.isString('')).to.be(true);
    });

    it('isObject', function() {
        expect(is.isObject({})).to.be(true);
        expect(is.isObject([])).to.be(false);
    });

    it('isNumber', function() {
        expect(is.isNumber({})).to.be(false);
        expect(is.isNumber(0)).to.be(true);
        expect(is.isNumber(NaN)).to.be(false);
    });

    it('isFunction', function() {
        expect(is.isFunction({})).to.be(false);
        expect(is.isFunction(new Function())).to.be(true);
        expect(is.isFunction(function(){})).to.be(true);
    });

    it('isFalsy', function() {
        expect(is.isFalsy(0)).to.be(false);
        expect(is.isFalsy('')).to.be(true);
        expect(is.isFalsy(undefined)).to.be(true);
        expect(is.isFalsy(null)).to.be(true);
        expect(is.isFalsy(false)).to.be(true);
        expect(is.isFalsy(NaN)).to.be(true);
        expect(is.isFalsy({})).to.be(false);
    });

    it('isEmpty', function() {
        expect(is.isEmpty(0)).to.be(false);
        expect(is.isEmpty('')).to.be(true);
        expect(is.isEmpty(undefined)).to.be(true);
        expect(is.isEmpty(null)).to.be(true);
        expect(is.isEmpty(false)).to.be(true);

        expect(is.isEmpty([])).to.be(true);
        expect(is.isEmpty({})).to.be(true);

        expect(is.isEmpty([0])).to.be(false);
        expect(is.isEmpty({0:0})).to.be(false);
    });

    it('isArguments', function() {
        expect(is.isArguments({})).to.be(false);
        expect(is.isArguments([])).to.be(false);
        (function(){
            expect(is.isArguments(arguments)).to.be(true);
        }());
        
    });
});
