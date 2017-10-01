var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-pick');

describe('next/pick', function () {

  it('nx.pick', function () {
    var object = { 'a': 1, 'b': '2', 'c': 3 };
    var picked = nx.pick( object, ['a','c']);

    assert.equal( object === picked, false);
    assert.equal(picked.a, 1);
    assert.equal(picked.c, 3);
  });

});
