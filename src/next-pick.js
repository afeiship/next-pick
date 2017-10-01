(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.pick = function (inObject, inPaths) {
    var result = {};
    inPaths.forEach(function(element) {
      var value = nx.path( inObject, element );
      nx.path( result, element, value);
    }, this);
    return result;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pick;
  }

}());
