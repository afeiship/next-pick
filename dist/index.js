/*!
 * name: @jswork/next-pick
 * description: Creates an object composed of the picked object properties.
 * homepage: https://github.com/afeiship/next-pick
 * version: 1.0.0
 * date: 2020-11-20 17:36:02
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { flatten: false };

  nx.pick = function (inObject, inPaths, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var result = {};
    inPaths.forEach(function (path) {
      var value = nx.get(inObject, path);
      if (options.flatten) {
        result[path] = value
      } else {
        nx.set(result, path, value);
      }
    }, this);
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pick;
  }
})();
