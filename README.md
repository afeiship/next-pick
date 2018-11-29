# next-pick
> Creates an object composed of the picked object properties.


## usage:
```js
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
```
