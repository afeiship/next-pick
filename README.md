# next-pick
> Creates an object composed of the picked object properties.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-pick
```

## usage
```js
import '@feizheng/next-pick';

const object = {
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

const picked = nx.pick(object, ['a', 'c', 'some.what.and.deep.one']);

// {
//   "a": 1,
//   "c": "c-value",
//   "some": {
//     "what": {
//       "and": {
//         "deep": {
//           "one": 1
//         }
//       }
//     }
//   }
// }
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-pick/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-pick
[version-url]: https://npmjs.org/package/@feizheng/next-pick

[license-image]: https://img.shields.io/npm/l/@feizheng/next-pick
[license-url]: https://github.com/afeiship/next-pick/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-pick
[size-url]: https://github.com/afeiship/next-pick/blob/master/dist/next-pick.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-pick
[download-url]: https://www.npmjs.com/package/@feizheng/next-pick
