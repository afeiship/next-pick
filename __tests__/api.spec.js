const nx = require('@feizheng/next-js-core2');
require('../src/next-pick');

describe('next/pick', function () {

  test('nx.pick: use flat object', function () {
    var object = { 'a': 1, 'b': '2', 'c': 3 };
    var picked = nx.pick(object, ['a', 'c']);

    expect(object === picked).toBe(false);
    expect(picked.a).toBe(1);
    expect(picked.c).toBe(3);
  });

  test('nx.pick: use deep path', function () {
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

    console.log(
      JSON.stringify(picked, null, 2)
    );

    expect(object === picked).toBe(false);
    expect(picked.a).toBe(1);
    expect(picked.c).toBe('c-value');
    expect(picked.some.what.and.deep.one).toBe(1);
  });

  test('flattern option true should return falsttern value', () => {
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

    var picked = nx.pick(object, ['a', 'c', 'some.what.and.deep.one'], { flatten: true });
    expect(picked).toEqual({ a: 1, c: 'c-value', 'some.what.and.deep.one': 1 });
  })

});
