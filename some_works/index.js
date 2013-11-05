var Person = function(name){
  this.name = name;
};
//coздание екземпляра Person
var alice = new Person('alice');

console.assert(alice instanceof Person );
