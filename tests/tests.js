var eq = window.strictEqual;
var neq = window.notStrictEqual;

module("X Core"); //////////////////////////////////////////////////////////

test("core to be okay", function () {
    neq(x, undefined);
    eq(typeof x === "function", true);
    eq(x.version, "1.0.0");
});

module("Array functions"); /////////////////////////////////////////////////

test("Function range(...) should generate proper array ranges", function() {
    var arr;

    neq(x.range, undefined);

    arr = x.range(1, 10);
    eq(arr.length, 9);
    eq(arr.join(","), "1,2,3,4,5,6,7,8,9");

    arr = x.range(10, 1);
    eq(arr.length, 9);
    eq(arr.join(","), "10,9,8,7,6,5,4,3,2");

    arr = x.range(1, 1);
    eq(arr.length, 0);
    eq(arr.join(","), "");


    arr = x.range(1, 5, 2);
    eq(arr.length, 2);
    eq(arr.join(","), "1,3");

    arr = x.range(5, 1, -2);
    eq(arr.length, 2);
    eq(arr.join(","), "5,3");

    arr = x.range(1, 5);
    eq(arr.length, 4);
    eq(arr.join(","), "1,2,3,4");

    arr = x.range(0, 0);
    eq(arr.length, 0);
    eq(arr.join(","), "");

    arr = x.range(0,1,1);
    eq(arr.length, 1);
    eq(arr.join(","), "0");

    arr = x.range(-10,-1);
    eq(arr.length, 9);
    eq(arr.join(","), "-10,-9,-8,-7,-6,-5,-4,-3,-2");

    arr = x.range(-1, -20);
    eq(arr.length, 19);
    eq(arr.join(","), "-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19");

    arr = x.range(5,1);
    eq(arr.length, 4);
    eq(arr.join(","), "5,4,3,2");

    arr = x.range(1, 0, 1);
    eq(arr.length, 0);
    eq(arr.join(","), "");

    arr = x.range(1, 0);
    eq(arr.length, 1);
    eq(arr.join(","),"1");

    arr = x.range(1, 1, -1);
    eq(arr.length, 0);
    eq(arr.join(","),"");

    arr = x.range(5);
    eq(arr.length, 0);
    eq(arr.join(","),"");

    arr = x.range(-10);
    eq(arr.length, 0);
    eq(arr.join(","), "");

   });


test("Function first(...) should return initial values", function(){
    var ret;

    ret = x.first([1, 2, 3]);
    eq(ret, 1);

    ret = x.first([1, 2, 3], 1);
    eq(ret instanceof Array, true);
    eq(ret.length, 1);
    eq(ret[0], 1);

    ret = x.first([0, 5, 3], 0);
    eq(ret instanceof Array, true);
    eq(ret.length, 0);

    ret = x.first([-5, -2, 4, 5, 9], -5);
    eq(ret instanceof Array, true);
    eq(ret.length, 0);

    ret = x.first([-0, -1, -2, -3]);
    eq(ret, -0);

    ret = x.first([1], 0);
    eq(ret instanceof Array, true);
    eq(ret.length, 0);

});

test("Function last(...) should return last values", function(){
    var ret;

    ret = x.last([1, 2, 3, 4, 5]);
    eq(ret, 5);

    ret = x.last([1, 2, 3, 4, 5], 5);
    eq(ret instanceof Array, true);
    eq(ret.length, 5);
    eq(ret[4], 5);

    ret = x.last([5, 8, 9, 10, 0], 0);
     eq(ret instanceof Array, true);
    eq(ret.length, 0);

    ret = x.last([-5, -6, -7, -8], -8);
    eq(ret instanceof Array, true);
    eq(ret.length, 0);

    ret = x.last([5]);
    eq(ret, 5);

    ret = x.last([-8]);
    eq(ret, -8);


});

test("Function intersection(...) should return the dublicates values",function(){

    var ret;

    ret = x.intersection([1, 2, 3, 4, 5, 6],[2, 3, 4, 5]);
    eq(ret.length, 4);
    eq(ret.join(","), "2,3,4,5");

    ret = x.intersection([-1, -4, -5, -6],[-1]);
    eq(ret.length, 1);
    eq(ret.join(","), "-1");

    ret = x.intersection([2],[2]);
    eq(ret.length, 1);
    eq(ret.join(","), "2");

    ret = x.intersection([1, 6, 7, 8, 9, 10],[1, 6, 7, 8, 9, 10]);
    eq(ret.length, 6);
    eq(ret.join(","), "1,6,7,8,9,10");

    ret = x.intersection([],[]);
    eq(ret.length, 0);
    eq(ret.join(","), "");
});


test("Function indexOf(...) should return position of the values ",function(){

    var ret;

    ret = x.indexOf([1, 2, 3, 4, 5, 6, 7, 8], 6);
    eq(ret, 5);

    ret = x.indexOf([4, 5, 6, 7],4);
    eq(ret, 0);

    ret = x.indexOf([-1, -2, -3, -4, -5], -3);
    eq(ret, 2);

    ret = x.indexOf([0],2);
    eq(ret, -1);

    ret = x.indexOf([5,1], 1);
    eq(ret, 1);

    ret = x.indexOf([0], 0);
    eq(ret, 0);

    ret = x.indexOf([5, 4, 2, 3, 1], 6);
    eq(ret, -1);

    ret = x.indexOf([5, 4, 3, 1], 1);
    eq(ret, 3);

    ret = x.indexOf([]);
    eq(ret, -1);

    ret = x.indexOf([1, 2, 3, 4, 5, 6, 8], 8);
    eq(ret, 6);

});

test("Function exists(...) should return the statement of the values ture or false ",function(){

    var ret;

    ret = x.exists([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],10);
    eq(ret, true);

    ret = x.exists([1, 2, 3, 4, 5],8);
    eq(ret, false);

    ret = x.exists([4, 3, 2, 7, 8, 9], 9);
    eq(ret, true);

    ret = x.exists([-9, -10, -11], 11);
    eq(ret, false);

    ret = x.exists([-8, -10, -11, -3, -4, -5], -5);
    eq(ret,true);

    ret = x.exists([]);
    eq(ret, false);

    ret = x.exists([0], 0);
    eq(ret, true);

    ret = x.exists([0, 1, 2], 4);
    eq(ret, false);

    ret = x.exists([1], 1);
    eq(ret, true);

    ret = x.exists([-5], 5);
    eq(ret, false);
});

test("Function lastIndexOf(...) should return position of the last occurrence of value ",function(){

    var ret;

    ret = x.lastIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 5, 3, 2, 1 ], 1);
    eq(ret,11);

    ret = x.lastIndexOf([1, 2,5, 3, 2, 1 ], -1);
    eq(ret, -1);

    ret = x.lastIndexOf([1, 2, 7, 8, 5, 3, 2, 1, 7, 8, 2 ], 8);
    eq(ret, 9);

    ret = x.lastIndexOf([-1, -2, -3, -4, -5, -6, -7, -8, -5, -3, -2, -1 ], 5);
    eq(ret, -1);

    ret = x.lastIndexOf([-1, -2, -3, -6, -7, -8, -5, -3, -2, -1 ], -3);
    eq(ret, 7);

    ret = x.lastIndexOf([-1, -2,-7, -8, -5, -3, -2, -1 ], -8);
    eq(ret, 3);

    ret = x.lastIndexOf([-5], -6);
    eq(ret, -1);

    ret = x.lastIndexOf([-1 ], -1);
    eq(ret, 0);

    ret = x.lastIndexOf([-1, -2, -2, -1, -4 ], -2);
    eq(ret, 2);

    ret = x.lastIndexOf([-1, -1, -1, -1, -1 ], -1);
    eq(ret, 4);
});


test("Function sortedIndex(...) should search the index at which the value should be inserted ",
    function(){

    var ret;

    ret = x.sortedIndex([1, 2, 3, 4, 5, 6],2.5);
    eq(ret, 2);

    ret = x.sortedIndex([10, 20, 30, 40, 50, 60, 70, 80, 90, 100],55);
    eq(ret, 5);

    ret = x.sortedIndex([-1, -5, -8, -10, -11, -12], 9);
    eq(ret, 6);

    ret = x.sortedIndex([100, 200, 300, 400, 500, 600], 550);
    eq(ret, 5);

    ret = x.sortedIndex([1, 9], 10);
    eq(ret, 2);

    ret = x.sortedIndex([], 0);
    eq(ret, 0);

    ret = x.sortedIndex([-1, 0], 0.5);
    eq(ret, 2);

    ret = x.sortedIndex([-1], 1.5);
    eq(ret, 1);

    ret = x.sortedIndex([], 10,11);
    eq(ret, 0, 1);

    ret = x.sortedIndex([-11, 12], 11.5);
    eq(ret, 1);
});

test("Function merge(...) should convert the array into object and merge the values",
    function(){

    var ret;

    ret = x.merge(['Sharukh', 'Aamir', 'Salman'], [30, 40, 50]);
    eq(x.keys(ret).join(","), "Sharukh,Aamir,Salman");
    eq(ret.Sharukh, 30);
    eq(ret.Aamir, 40);
    eq(ret.Salman,50);

    ret = x.merge(['maruti', 'honda', 'hyundai'], [50000,10000,200000]);
    eq(x.keys(ret).join(","), "maruti,honda,hyundai");
    eq(ret.maruti, 50000);
    eq(ret.honda, 10000);
    eq(ret.hyundai, 200000);

    ret = x.merge(['abc', 'pqr', 'xyz'], [500, 500, 500]);
    eq(x.keys(ret).join(","), "abc,pqr,xyz");
    eq(ret.abc, 500);
    eq(ret.pqr, 500);
    eq(ret.xyz,500);
});

test("Function initial(...) should remove the last values", function(){

    var ret;

    ret = x.initial([1, 2, 3, 4, 5], 1);
    eq(ret.length, 4);
    eq(ret.join(","), "1,2,3,4");

    ret = x.initial([-1, -2, -3, -4, -5], -1);
    eq(ret.length, 5);
    eq(ret.join(","), "-1,-2,-3,-4,-5");

    ret = x.initial([10, 20, 30, 40, 50], 2);
    eq(ret.length, 3);
    eq(ret.join(","), "10,20,30");

    ret = x.initial([0], 0);
    eq(ret.length, 1);
    eq(ret.join(","), "0");

    ret = x.initial([5, 6, 7, 8, 9, 10, 11, 12, 13], 0);
    eq(ret.length, 9);
    eq(ret.join(","), "5,6,7,8,9,10,11,12,13");

    ret = x.initial([], 0);
    eq(ret.length, 0);
    eq(ret.join(","), "");



});

test("Function rest(...) should remove the first value and returns the value",function(){

    var ret;

    ret = x.rest([1, 2, 3, 4, 5], 1);
    eq(ret.length,4);
    eq(ret.join(","), "2,3,4,5");

    ret = x.rest([10, 20, 30, 40, 50, 60, 70], 3);
    eq(ret.length, 4);
    eq(ret.join(","), "40,50,60,70");

    ret = x.rest([0], 1);
    eq(ret.length, 0);
    eq(ret.join(","), "");

    ret = x.rest([-10, -20, -30, -40, -50, -60, -70], 5);
    eq(ret.length, 2);
    eq(ret.join(","), "-60,-70");

    ret = x.rest([], 0);
    eq(ret.length, 0);
    eq(ret.join(","), "");

});

test("Function compact(...) should removes the falsy values", function(){

    var ret;

    ret = x.compact([0,1,false,"",5]);
    eq(ret.length, 2);
    eq(ret.join(","), "1,5");

    ret = x.compact([5,"abc",false,"",5,7,9,0,"",true]);
    eq(ret.length, 6);
    eq(ret.join(","), "5,abc,5,7,9,true");

    ret = x.compact([""]);
    eq(ret.length, 0);
    eq(ret.join(","),"");

    ret = x.compact([0, 0, false, ""]);
    eq(ret.length, 0);
    eq(ret.join(","), "");

    ret = x.compact([10,20,1,3,125,154]);
    eq(ret.length, 6);
    eq(ret.join(","), "10,20,1,3,125,154");

    ret = x.compact(["",0,true,3,15,15]);
    eq(ret.length, 4);
    eq(ret.join(","), "true,3,15,15");
});

test("Function without(...) should removes dublicates values", function(){

    var ret;

    ret = x.without([1, 2, 1, 1, 3, 2, 1, 4, 5, 6, 7], 1);
    eq(ret.length, 8);
    eq(ret.join(","), "2,1,3,2,4,5,6,7");

    ret = x.without([-5, -6, -7, -8, -8,-9, -7,-6],-9,-6,-8);
    eq(ret.length, 4);
    eq(ret.join(","), "-5,-7,-8,-7");

    ret = x.without([0], 0);
    eq(ret.length, 0);
    eq(ret.join(","), "");

    ret = x.without([]);
    eq(ret.length, 0);
    eq(ret.join(","), "");

    ret = x.without([-1], 1);
    eq(ret.length, 1);
    eq(ret.join(","), "-1");

});

test("Function zip(...) should merge the values having two parameter", function(){

    var ret;

    ret = x.zip(['moe','abc','pqr'],[1,2,3],[true,false,false]);
    eq(ret.moe);
    eq(ret.abc);
    eq(ret.pqr);
    eq(ret.join(","), "moe,1,true,abc,2,false,pqr,3,false");

    ret = x.zip(['Aamir','Noman','talha'],[50000,2000,300],[true,false,true]);
    eq(ret.Aamir);
    eq(ret.Noman);
    eq(ret.talha);
    eq(ret.join(","), "Aamir,50000,true,Noman,2000,false,talha,300,true");

    ret = x.zip(['Car', 'Bike'],[500000,60000],[true,false]);
    eq(ret.Car);
    eq(ret.Bike);
    eq(ret.join(","), "Car,500000,true,Bike,60000,false");
});

test("Function flatten(...) should flatterns a nested Array", function(){

    var ret;

    ret = x.flatten([[[1, 2], [3, 4], [5, [6, [7, 8]]]]]);
    eq(ret.length, 8);
    eq(ret.join(","), "1,2,3,4,5,6,7,8");

    ret = x.flatten([[[5], [3], [4], [5], [6], [7], [8]]]);
    eq(ret.length, 7);
    eq(ret.join(","), "5,3,4,5,6,7,8");

    ret = x.flatten([[0],[],[],[],[]]);
    eq(ret.length, 1);
    eq(ret.join(","), "0");

    ret = x.flatten([[[],[[[]]]]]);
    eq(ret.length, 0);
    eq(ret.join(","), "");

    ret = x.flatten([[1],[],[2,3,4]]);
    eq(ret.length, 4);
    eq(ret.join(","), "1,2,3,4");
});

module("Object functions"); /////////////////////////////////////////////////


test("function keys(...) should returns all the names of the object's properties",function(){

    var arr;

    arr = x.keys({two: 2, three: 3, four:4});
    eq(arr.join(","), "two,three,four");
    eq(arr.length,3);

    arr = x.keys({five: 5, six: 6, seven:7, eight:8});
    eq(arr.join(","), "five,six,seven,eight");
    eq(arr.length,4);

    arr = x.keys({nine: 9});
    eq(arr.join(","), "nine");
    eq(arr.length,1);

    arr = x.keys({});
    eq(arr.join(","), "");
    eq(arr.length,0);

    arr = x.keys({one: 1, two: 2});
    eq(arr.join(","), "one,two");
    eq(arr.length,2);
});

test("function values(...) should returns all the values of the object's properties",function(){

    var arr;

    arr = x.values({two: 2, three: 3, four:4});
    eq(arr.join(","), "2,3,4");
    eq(arr.length,3);

    arr = x.values({five: 5, nine: 9, seven:7, eight: 8});
    eq(arr.join(","), "5,9,7,8");
    eq(arr.length,4);

    arr = x.values({one: 1});
    eq(arr.join(","), "1");
    eq(arr.length,1);

    arr = x.values({});
    eq(arr.join(","), "");
    eq(arr.length,0);

    arr = x.values({1:1});
    eq(arr.join(","), "1");
    eq(arr.length,1);

});

test("function pairs(...) should returns all the pairs of th eobject",function(){

    var arr;

    arr = x.pairs({two: 2, three: 3, four:4});
    eq(arr.join(","), "two,2,three,3,four,4");
    eq(arr.length,3);

    arr = x.pairs({five: 5, nine: 9, seven:7, eight: 8});
    eq(arr.join(","), "five,5,nine,9,seven,7,eight,8");
    eq(arr.length,4);

    arr = x.pairs({one: 1,three: 3});
    eq(arr.join(","), "one,1,three,3");
    eq(arr.length,2);

    arr = x.pairs({});
    eq(arr.join(","), "");
    eq(arr.length,0);

    arr = x.pairs({1:1});
    eq(arr.join(","), "1,1");
    eq(arr.length,1);

});

test("Function invert(...) should returns the object keys",function(){

    var obj;

    obj = x.invert({Cat: "Cats", Dog: "Dogs", Bird: "birds"});
    eq(x.keys(obj).join(","), "Cats,Dogs,birds");
    eq(x.values(obj).join(","), "Cat,Dog,Bird");
    eq(x.pairs(obj).join(","), "Cats,Cat,Dogs,Dog,birds,Bird");

    obj = x.invert({Talha: "talha", Junaid: "junaid", Abdul: "abdul"});
    eq(x.keys(obj).join(","), "talha,junaid,abdul");
    eq(x.values(obj).join(","), "Talha,Junaid,Abdul");
    eq(x.pairs(obj).join(","), "talha,Talha,junaid,Junaid,abdul,Abdul");

    obj = x.invert({Car: "Maruti", Bike: "Bajaj", Scooty: "Honda"});
    eq(x.keys(obj).join(","), "Maruti,Bajaj,Honda");
    eq(x.values(obj).join(","), "Car,Bike,Scooty");
    eq(x.pairs(obj).join(","), "Maruti,Car,Bajaj,Bike,Honda,Scooty");

    obj = x.invert({});
    eq(x.keys(obj).join(","), "");
    eq(x.values(obj).join(","), "");
    eq(x.pairs(obj).join(","), "");

     obj = x.invert({1: "One"});
    eq(x.keys(obj).join(","), "One");
    eq(x.values(obj).join(","), "1");
    eq(x.pairs(obj).join(","), "One,1");
});

test("Function functions(...) should returns list of name of method object in sorted format",
    function(){

    var arr;

    arr = x.functions({init: function() {},tpString:function(){return "Function Object";},
          a: function() {},
          b: function () {}});
    eq(arr.length, 4);
    eq(arr.join(","), "a,b,init,tpString");

    arr = x.functions({IT: function() {},tpString:function(){return "Function Object";},
          a: function () {}});
    eq(arr.length, 3);
    eq(arr.join(","), "IT,a,tpString");

    arr = x.functions({name: function() {},Address:function(){},
          Age: function () {}});
    eq(arr.length, 3);
    eq(arr.join(","), "Address,Age,name");

    arr = x.functions({});
    eq(arr.length, 0);
    eq(arr.join(","), "");

    arr = x.functions({1: function() {}});
    eq(arr.length, 1);
    eq(arr.join(","), "1");

    arr = x.functions({"": function() {}});
    eq(arr.length, 1);
    eq(arr.join(","), "");
});

test("Function fields(...) should returns list of name of object",function(){

    var arr;

    arr = x.fields({name:"test", age: "verify"});
    eq(arr.length, 2);
    eq(arr.join(","),"age,name");

    arr = x.fields({IT:"Information Technologies", Class: "13th", College:"Rmc"});
    eq(arr.length, 3);
    eq(arr.join(","), "Class,College,IT");

    arr = x.fields({});
    eq(arr.length, 0);
    eq(arr.join(","), "");

    arr = x.fields({1: "1", 2:"2"});
    eq(arr.length, 2);
    eq(arr.join(","), "1,2");

    arr = x.fields({1:"", 2:""});
    eq(arr.length, 2);
    eq(arr.join(","), "1,2");

    arr = x.fields({"" : "one"});
    eq(arr.length, 1);
    eq(arr.join(","), "");
});

test("Function clone(...) should returns the shallow-copied of the object",function(){

    var obj;

    obj = x.clone({name:'moe', lastName: 'abc'});
    eq(x.keys(obj).join(","), "name,lastName");
    eq(x.values(obj).join(","), "moe,abc");
    eq(x.pairs(obj).join(","), "name,moe,lastName,abc");

    obj = x.clone({Address:'mira rd', phone: '9768'});
    eq(x.keys(obj).join(","), "Address,phone");
    eq(x.values(obj).join(","), "mira rd,9768");
    eq(x.pairs(obj).join(","), "Address,mira rd,phone,9768");

    obj = x.clone({});
    eq(x.keys(obj).join(","), "");
    eq(x.values(obj).join(","), "");
    eq(x.pairs(obj).join(","), "");

    obj = x.clone({1:"1"});
    eq(x.keys(obj).join(","), "1");
    eq(x.values(obj).join(","), "1");
    eq(x.pairs(obj).join(","), "1,1");
});

module("Is functions"); /////////////////////////////////////////////////

test("Function isArray(...) should check the values ia an array or not",function(){

    var bool;

    bool = x.isArray([1, 2, 3]);
    eq(bool, true);

    bool = x.isArray({abc: "pqr"});
    eq(bool, false);

    bool = x.isArray(["abc"]);
    eq(bool, true);

    bool = x.isArray([]);
    eq(bool, true);

    bool = x.isArray({});
    eq(bool, false);

    bool = x.isArray("abc");
    eq(bool, false);

    bool = x.isArray([1, 2, 3, 4, 5, 6, "abc", "pqr"]);
    eq(bool, true);

    bool = x.isArray(1, 2, 3, 4, 5, 6, "abc", "pqr");
    eq(bool, false);

    bool = x.isArray();
    eq(bool, false);

    bool = x.isArray([""]);
    eq(bool, true);
});

test("Function isObject(...) should check the values ia an Object or not",function(){

    var bool;

    bool = x.isObject({abc: "pqr"});
    eq(bool, true);

    bool = x.isObject(1, 2, 3);
    eq(bool, false);

    bool = x.isObject({abc:"moe", pqr: "xyz"});
    eq(bool, true);

    bool = x.isObject([]);
    eq(bool, true);

    bool = x.isObject({});
    eq(bool, true);

    bool = x.isObject("abc");
    eq(bool, false);

    bool = x.isObject({name:"talha", lastName:"Maniar"});
    eq(bool, true);

    bool = x.isObject({1:1});
    eq(bool, true);

    bool = x.isObject();
    eq(bool, false);

    bool = x.isObject([""]);
    eq(bool, true);
});

test("Function isNullOrUndef(...) should check the values is null or undefined",function(){

    var bool;

    bool = x.isNullOrUndef(null);
    eq(bool, true);

    bool = x.isNullOrUndef(1, 2, 3);
    eq(bool, false);

    bool = x.isNullOrUndef();
    eq(bool, true);

    bool = x.isNullOrUndef([]);
    eq(bool, false);

    bool = x.isNullOrUndef({});
    eq(bool, false);

    bool = x.isNullOrUndef([""]);
    eq(bool, false);

    bool = x.isNullOrUndef(null);
    eq(bool, true);

    bool = x.isNullOrUndef();
    eq(bool, true);

    bool = x.isNullOrUndef(undefined);
    eq(bool, true);

    bool = x.isNullOrUndef(["abc", 1, 2, 3]);
    eq(bool, false);
});

test("Function isString(...) should check the values is in String or not",function(){

    var bool;

    bool = x.isString("abc");
    eq(bool, true);

    bool = x.isString(1,2,3);
    eq(bool, false);

    bool = x.isString("");
    eq(bool, true);

    bool = x.isString(["abc"]);
    eq(bool, false);

    bool = x.isString({abc:"pqr"});
    eq(bool, false);

    bool = x.isString({});
    eq(bool, false);

    bool = x.isString();
    eq(bool, false);

    bool = x.isString("moe");
    eq(bool, true);

    bool = x.isString("1,2,3");
    eq(bool, true);

    bool = x.isString([{mohan:"pqr"}]);
    eq(bool, false);

});

test("Function isNumber(...) should check the values is in Number or not",function(){

    var bool;

    bool = x.isNumber(1,2,3);
    eq(bool, true);

    bool = x.isNumber("");
    eq(bool, false);

    bool = x.isNumber([""]);
    eq(bool, false);

    bool = x.isNumber([1,3,4,5]);
    eq(bool, false);

    bool = x.isNumber(1, 2, 3, 4);
    eq(bool, true);

    bool = x.isNumber(1,2,3);
    eq(bool, true);

    bool = x.isNumber([]);
    eq(bool, false);

    bool = x.isNumber({});
    eq(bool, false);

    bool = x.isNumber(1,3,4,5);
    eq(bool, true);

    bool = x.isNumber();
    eq(bool, false);
});

test("Function isDate(...) should check the values is a Date",function(){

    var bool;

    bool = x.isDate(new Date());
    eq(bool, true);

    bool = x.isDate("");
    eq(bool, false);

    bool = x.isDate([]);
    eq(bool, false);

    bool = x.isDate({});
    eq(bool, false);

    bool = x.isDate();
    eq(bool, false);

});

test("Function isRegExp(...) should check the parameter is a Regular Expression",function(){

    var bool;

    bool = x.isRegExp(/moe/);
    eq(bool, true);

    bool = x.isRegExp("");
    eq(bool, false);

    bool = x.isRegExp(/moe/,/a/);
    eq(bool, true);

    bool = x.isRegExp();
    eq(bool, false);

    bool = x.isRegExp(["/a/"]);
    eq(bool, false);

    bool = x.isRegExp({});
    eq(bool, false);

    bool = x.isRegExp(/b/,/c/);
    eq(bool, true);

    bool = x.isRegExp(/0/,/1/);
    eq(bool, true);

    bool = x.isRegExp(/""/,/""/);
    eq(bool, true);

    bool = x.isRegExp([]);
    eq(bool, false);

});

test("Function isBoolean(...) should check the parameter is a Boolean",function(){

    var bool;

    bool = x.isBoolean(true);
    eq(bool, true);

    bool = x.isBoolean(false);
    eq(bool, true);

    bool = x.isBoolean("");
    eq(bool, false);

    bool = x.isBoolean([]);
    eq(bool, false);

    bool = x.isBoolean({});
    eq(bool, false);

    bool = x.isBoolean(true);
    eq(bool, true);
});


module("Collection functions"); /////////////////////////////////////////////////

test("Function each(...) handles objects built-in arrays and objects",function(){

    expect(20);

    var context = {
        counter: 0,
        text: "abcde"
    };

    x.each([1,2,3,4, 5], function(index, value) {
        eq(this.counter, index);
        eq(this.counter + 1, value);
        this.counter++;
    }, context) ;

    context.counter = 0;

    x.each(context.text, function(index, ch) {
        eq(this.counter, index);
        eq(this.text[index], ch);
        this.counter++;
    }, context);

});