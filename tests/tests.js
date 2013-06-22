window.eq = window.strictEqual;
window.neq = window.notStrictEqual;
window.expect = window.test;

module("X Core");

test("core to be okay", function () {
    neq(x, undefined);
    eq(typeof x === "function", true);
    eq(x.version, "1.0.0");
});

module("Array functions");

test(".range should generate proper ranges", function() {
    var arr;

    neq(x.range, undefined);
    arr = x.range(1, 10);
    eq(arr.length, 10);
});