var test = require('tape');

var constants = {};

global.angular = {
    module: function (moduleName, deps) {
        return {
          constant: function (constantName, value) { constants[constantName] = value; }
        }
    }
}

var b64 = require('./angular-base64.js');

test('constant registered', function (t) {
    t.plan(1);

    t.notEqual(undefined, constants.$base64);
})

test('can encode and decode non-padded', function (t) {
    t.plan(2);

    var text = "The quick brown fox jumps over the lazy doges";
    var b64 = "VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZ2Vz";

    t.equal(b64, constants.$base64.encode(text));
    t.equal(text, constants.$base64.decode(b64));
})

test('can encode and decode padded', function (t) {
    t.plan(2);

    var text = "The quick brown fox jumps over the lazy dog";
    var b64 = "VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw==";

    console.log(constants.$base64.encode(text))

    t.equal(b64, constants.$base64.encode(text));
    t.equal(text, constants.$base64.decode(b64));
})

test('can decode with padding missing', function (t) {
    t.plan(1);

    var text = "The quick brown fox jumps over the lazy dog";
    var b64 = "VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw";

    t.equal(text, constants.$base64.decode(b64));
})
