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
});

