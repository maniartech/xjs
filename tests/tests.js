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

    arr = x.range(1,5);
    eq(arr.length, 4);
    eq(arr.join(","), "1,2,3,4");

    arr = x.range(0,0);
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