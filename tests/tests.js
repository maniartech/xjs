var eq = window.strictEqual;
var neq = window.notStrictEqual;

module("X Core");

test("core to be okay", function () {
    neq(x, undefined);
    eq(typeof x === "function", true);
    eq(x.version, "1.0.0");
});

module("Array functions");

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


    ret = x.intersection([1, 2, 3, 4, 5, 2, 3, 4, 5, 6],2, 3, 4, 5);
    eq(ret, 3);
    eq(ret.length, 0);
    eq(ret.join(","), "1, 6");
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

//test("Function flatten(...) should flatterns a nested Array", function(){

    var ret;

    ret = x.flatten([[[1, 2], [3, 4], [5, [6, [7, 8]]]]]);
    eq(ret.length, 8);

//});

test("function keys(...) should returns all the names of the object's properties",function(){

    var obj;

    obj = x.keys({two: 2, three: 3, four:4});
    eq(obj);

});
