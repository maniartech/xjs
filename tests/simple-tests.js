
//define x
var x = require("../src/x").x;

//load other x modules
require('../src/x.array').load(x);

var a = [1,2,3,4,5,6],
    array1 = [1,2,3,4,5,6],
    array2 = [1,4,6,8,9,10],
    //b=[1,2,3,4,5,6],
    c=[1,2,8,5,6,48,45,4],
    d=[1,2,3,4,5,6,4,2,3,5],
    e=[10,20,30,40,50,60];
    f=['moe', 'larry', 'curly'];




console.log(x.range(0,5,2));
console.log(x.first(a,1));
console.log(x.last(a,2));
console.log(x.intersection(array1,array2));
console.log(x.indexOf(a,7));
console.log(x.indexValue(c,5));
console.log(x.lastIndexOf(d,3));
console.log(x.sortedIndex(e,55));
console.log(x.merge(f,[30,40,50]));

