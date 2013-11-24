'use strict';

var getObject = function(path, obj) {
  var result = obj,
      path   = path.split('.');
  path.forEach(function(el){
    result = result[el];
    return result;
  });

  return result;
};

var o = {
  a: {
      b: 'c'
    }
};

console.log(getObject('a.b', o)); // ‘c’
console.log(getObject('a', o));   // {b: ‘c’}
console.log(getObject('d', o));   // undefined
