
//define x
var x = require("../src/x").x;

//load other x modules
require('../src/x.array').load(x);
require('../src/x.objects').load(x);
require('../src/x.is').load(x);

//  x.array Functions //

var firArray   = [1,2,3,4,5,6],
    lstArray   = [1,2,3,4,5,6],
    intrArray1 = [1,2,3,4,5,6],
    intrArray2 = [1,4,6,8,9,10],
    indxArray  = [1,2,3,4,5,6,7,8],
    extArray   = [1,2,8,5,6,48,45,4],
    lstInArray = [1,2,3,4,5,6,4,2,3,5],
    srtInArray = [10,20,30,40,50,60],
    mergArray  = ['moe', 'larry', 'curly'],
    initArray  = [5,4,3,2,1],
    rstArray   = [5,4,3,2,1],
    compArray  = [0, 1, false, 2, '', 3],
    witArray   = [1, 2, 1, 0, 3, 1, 4],
    zpArray    = ['moe', 'larry', 'curly'];
    flatArray = [[1, 2], [3, 4], [5, [6, [7, 8]]]], retArray = [];


// console.log(x.range(0, 5, 2));
// console.log(x.first(firArray, 1));
// console.log(x.last(lstArray, 2));
// console.log(x.intersection(intrArray1, intrArray2));
// console.log(x.indexOf(indxArray, 6));
// console.log(x.exists(extArray, 5));
// console.log(x.lastIndexOf(lstInArray, 3));
// console.log(x.sortedIndex(srtInArray, 55));
// console.log(x.merge(mergArray, [30, 40, 50]));
// console.log(x.initial(initArray, 1));
// console.log(x.rest(rstArray, 1));
// console.log(x.compact(compArray));
// console.log(x.without(witArray, 1, 0));
// console.log(x.zip(zpArray, [30,40,50], [true,false,false]));
// x.flatten(flatArray,retArray);
// console.log(retArray);


//   x.objects Function   //

var keyObj  = ({one : 1, two : 2, three : 3}),
    valObj  = ({one : 1, two : 2, three : 3}),
    pairObj = ({one : 1, two : 2, three : 3}),
    invtObj = ({Moe: "Moses", Larry: "Louis", Curly: "Jerome"}),

    funObj  = ({
        name: "test",
        init: function() {},
        tpString: function() {
            return "Function Object";
        },
        a: function() {},
        b: function () {}
    });


console.log(x.keys(keyObj));
console.log(x.values(valObj));
console.log(x.pairs(pairObj));
console.log(x.invert(invtObj));
console.log(x.functions(funObj));
console.log(x.fields(funObj));
console.log(x.clone({name : 'moe'}));



//   x.isFunction //

console.log(x.isArray([1,2,3]));
console.log(x.isObject({name:"talha"}));
console.log(x.isNullOrUndef());
console.log(x.isString("moe"));
console.log(x.isNumber(8.5 * 2));
console.log(x.isfinite(-101));
console.log(x.isBoolean(null));
console.log(x.isDate(new Date()));
