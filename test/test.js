var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-pick');

describe('next/pick', function () {

  it('nx.pick: use flat object', function () {
    var object = { 'a': 1, 'b': '2', 'c': 3 };
    var picked = nx.pick(object, ['a', 'c']);

    assert.equal(object === picked, false);
    assert.equal(picked.a, 1);
    assert.equal(picked.c, 3);
  });

  it('nx.pick: use deep path', function () {
    var object = {
      'a': 1,
      'c': 'c-value',
      some: {
        what: {
          and: {
            deep: {
              one: 1
            }
          }
        }
      }
    };
    var picked = nx.pick(object, ['a', 'c', 'some.what.and.deep.one']);

    // console.log(
    //   JSON.stringify(picked)
    // );

    assert.equal(object === picked, false);
    assert.equal(picked.a, 1);
    assert.equal(picked.c, 'c-value');
    assert.equal(picked.some.what.and.deep.one, 1);
  });

});
