
//Array functions in xlib
this.load = function load(x) {
    "use strict";

    /**
     *
     *
     */
    x.keys = function keys(obj) {
        var retArr = [],
            key;

        for(key in obj) {
            retArr[retArr.length] = key;
        }
        return retArr;
    };

    /**
     *
     *
     */
    x.values = function values(obj) {
        var retArr = [],
            key;

        for(key in obj) {
            retArr[retArr.length] = obj[key];
        }
        return retArr;
    };

    /**
     *
     *
     */
    x.pairs = function pairs(obj) {
        var retArr = [],
            key;

        for(key in obj) {
            retArr[retArr.length] = [key, obj[key]];
        }
        return retArr;
    };

    /**
     *
     *
     */
    x.invert = function invert(obj) {
        var retObj = {},
            key;

        for(key in obj) {
            retObj[obj[key]] = key;
        }
        return retObj;
    };

    /**
     *
     *
     */
    x.functions = function functions(obj) {
        var retArr = [],
            key;

        for (key in obj) {
            if (typeof obj[key] === "function") {
                retArr.push(key);
            }
        }
        return retArr.sort();
    };

    /**
     *
     *
     */
    x.fields = function fields(obj) {
        var retArr = [],
            key;

        for (key in obj) {
            if (typeof obj[key] !== "function") {
                retArr.push(key);
            }
        }
        return retArr.sort();
    };

    /**
     *
     *
     */




};