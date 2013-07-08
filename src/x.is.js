

    //Recognition functions in xlib

    /**
     * Check whether the supplied value is an Array or not.
     *
     * @function isArray(val)
     * @params {any} val Any value which need to be test in an Array.
     * @returns {boolean} Returns `true` if value is an `Array` otherwise `false`.
     *
     * @example
     * var arr = [1, 2, 3, 4, 5];
     * console.log(x.isArray(arr));  //Print true
     * console.log(x.isArray(123)); //Prints false
     *
     * @version 1.0
     */
    x.isArray = function isArray(val) {
        return val instanceof Array;
    };

     /**
     * Check whether the parameter value is an Object or not.
     *
     * @function isObject(val)
     * @params {any} val Any value which need to be test in an Object.
     * @returns {boolean} Returns `true` if value is an `Object` otherwise `false`.
     *
     * @example
     * var obj = [{Fname: "Talha" Lname: "Maniar"}];
     * console.log(x.isObject(obj));  //Print true
     * console.log(x.isObject([1,2,3])); //Prints false
     *
     * @version 1.0
     */
    x.isObject = function isObject(val) {
        return val === Object(val);
    };

    /**
     * Check whether the specefied value is Null Or Undefined.
     *
     * @function isNullOrUndef(val)
     * @params {any} val Any value which need to be test is Null or Undefined.
     * @returns {boolean} Returns `true` if value is a `Null Or Undefined` otherwise `false`.
     *
     * @example
     * var undefine = ();
     * console.log(x.isullOrUndef(undefine));  //Print true
     * console.log(x.isullOrUndef("moe")); //Prints false
     *
     * @version 1.0
     */
    x.isNullOrUndef = function isNullOrUndef(val) {
        return val === null || val === undefined;
    };

    /**
     * Check whether the provided value is a String.
     *
     * @function isString(val)
     * @params {any} val Any value which need to be test in a String.
     * @returns {boolean} Returns `true` if value is a `String` otherwise `false`.
     *
     * @example
     * var str = ("Moe", " Moes");
     * console.log(x.isullOrUndef(str));  //Print true
     * console.log(x.isullOrUndef(1,2,3)); //Prints false
     *
     * @version 1.0
     */
    x.isString = function isString(val) {
      return val === String(val);
    };

    /**
     * Check whether the supplied value is a Number.
     *
     * @function isNumber(val)
     * @params {any} val Any value which need to be test in a Number.
     * @returns {boolean} Returns `true` if value is a `Number` otherwise `false`.
     *
     * @example
     * var num = (8.5 * 2);
     * console.log(x.isullOrUndef(num));  //Print true
     * console.log(x.isullOrUndef("moe")); //Prints false
     *
     * @version 1.0
     */
    x.isNumber = function isNumber(val) {
        return val === Number(val);
    };

    /**
     * Check whether the specified value is an Boolean.
     *
     * @function isBoolean(val)
     * @params {any} val Any value which need to be test in an Boolean.
     * @returns {boolean} Returns `true` if value is an `Boolean` otherwise `false`.
     *
     * @example
     * var bool = (true);
     * console.log(x.isBoolean(bool));  //Print true
     * console.log(x.isBoolean(null)); //Prints false
     *
     * @version 1.0
     */
    x.isBoolean = function isBoolean(val) {
        return val === true || val === false;
    };

    /**
     * Check whether the provided value is a Date.
     *
     * @function isDate(val)
     * @params {any} val Any value which need to be test is a Date.
     * @returns {boolean} Returns `true` if value is a `Date` otherwise `false`.
     *
     * @example
     * var date = (new Date());
     * console.log(x.isDate(date));  //Print true
     * console.log(x.isDate(1,2,3)); //Prints false
     *
     * @version 1.0
     */
    x.isDate = function isDate(val) {
        return val instanceof Date;
    };

    /**
     * Check whether the supplied value is a Regular Expression.
     *
     * @function isRegExp(val)
     * @params {any} val Any value which need to be test is a Regluar Expression.
     * @returns {boolean} Returns `true` if value is a `Regular Expression` otherwise `false`.
     *
     * @example
     * var regExp = (/moe/);
     * console.log(x.isRegExp(regExp));  //Print true
     * console.log(x.isRegExp("moe")); //Prints false
     *
     * @version 1.0
     */
    x.isRegExp = function isRegExp(val) {
        return val instanceof RegExp;
    };
