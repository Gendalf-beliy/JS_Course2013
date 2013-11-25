'use strict'

var arr = ['test', 2, 1.5, false ];

if ([].indexOf) {

	var find = function(array, value) {
		return array.indexOf(value);
	}
} else {
	var find = function(array, value) {
		for(var i = 0; i<array.length; i++){
			if (array[i] === value) return i;
		}
		return -1;
	}
}

console.log(find(arr, 0));
console.log(find(arr, "test"));
console.log(find(arr, 2));
console.log(find(arr, 1.5));
console.log(find(arr, 0));


