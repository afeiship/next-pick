(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.pick = function (inObject, inPaths) {
    var result = {};
    inPaths.forEach(function(path) {
      var value = nx.path( inObject, path );
      nx.path( result, path, value);
    }, this);
    return result;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pick;
  }

}());
