

//Recognition functions in xlib
this.load = function load(x) {
    "use strict";

     x.isArray = function isArray(val) {
        return val instanceof Array;
    };

    /**
     *
     *
     */
    x.isObject = function isObject(val) {
        return val === Object(val);
    };

    /**
     *
     *
     */
    x.isNullOrUndef = function isNullOrUndef(val) {
        return val === null || val === undefined;
    };

    /**
     *
     *
     */
    x.isString = function isString(val) {
      return val === String(val);
    };

    /**
     *
     *
     */
    x.isNumber = function isNumber(val) {
        return val === Number(val);
    };

    /**
     *
     *
     */
    x.isfinite = function isfinite(val) {
        return Number(val) && isFinite(val);
    };

    /**
     *
     *
     */
    x.isBoolean = function isBoolean(val) {
        return val === true || val === false;
    };

    /**
     *
     *
     */
    x.isDate = function isDate(val) {
        return val instanceof Date;
    };

};