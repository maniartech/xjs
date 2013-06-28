/**
 *                  _
 *          _  __  (_)____
 *         | |/_/ / / ___/
 *        _>  <  / (__  )
 *       /_/|_|_/ /____/
 *           /___/
 *
 *      version: 1.0
 *      x.js - The most complete JavaScript library of its own kind.
 *
 *      http://www.x-js.net
 *      License: http://www.x-js.net/license
 *
 *      Copyright (c) 2013 - Maniar Technologies Private Limited - India
 *      http://www.maniartech.com
 *      Twitter: @maniartech
 *
 */

(function (root, undefined) {
    "use strict";

    var FORMAT_EXP = /(\$\d+)|(\$\w+)/g,
        x;

    //Define the main x function
    x = function x(str, context) {
        var key;

        if (context === undefined) {
            return str;
        }

        if (typeof context === "object") {
            for(key in context) {

            }
        }

        if (arguments.length < 2) {
            return str;
        }

        //if (arguments.length === 2 && typeof)

    };

    x.version = "1.0.0";



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
     * console.log(x.isObject({1,2,3})); //Prints false
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
     * Check whether the parameter value is a Finite.
     *
     * @function isFinites(val)
     * @params {any} val Any value which need to be test in an Finite Number.
     * @returns {boolean} Returns `true` if value is an `Finite` otherwise `false`.
     *
     * @example
     * var fin = (-101);
     * console.log(x.isFinites(fin));  //Print true
     * console.log(x.isFinites("Moe")); //Prints false
     *
     * @version 1.0
     */
    x.isFinites = function isfinites(val) {
        return Number(val) && isFinite(val);
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
        return val === Object(val);
    };


    //Recognition functions in xlib

    x.trimL = function trimL(str) {

    };

    x.trimR = function trimR(str) {

    };

    /**
     * Returns the new string by removing leading and trailing spaces in the supplied
     * string.
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     * @references
     * - Faster JavaScript Trims: http://blog.stevenlevithan.com/archives/faster-trim-javascript
     */
    x.trim = function(str) {
        if (str.trim) {
            return str.trim();
        }
    };

    /**
     * Generates and returns the character array from the specified string.
     * @param  {string} str The string to be processed.
     * @return {Array} The charcter array.
     * @exampel
     * var chars = x.toCharArray("hello");
     * console.log(chars); //Prints ['h','e','l','l','o']
     *
     * @version 1.0
     */
    x.toCharArray = function(str) {
        return str.split('');
    };

    //http://stackoverflow.com/questions/494035/how-do-you-pass-a-variable-to-a-regular-expression-javascript
    x.replaceAll = function replaceAll(str, strReplace, strWith) {

    }


    //Array functions in xlib

    /**
     * Generates an array containing range of numbers based on specified parameters.
     *
     * @function range(start, stop, [steps])
     * @params {number} start The start value in range.
     * @params {number} stop The stop value in range.
     * @params {[steps]} steps The number of steps in which range should be incremented.
     *
     * @example
     * var range = x.range(1, 10, 2);
     * console.log(range);  // Prints [1, 3, 5, 7, 9]
     *
     * @version 1.0
     */
    x.range = function range(start, stop, step) {
        var result = [],
            i;

        step = step ? step : (start < stop) ? 1 : -1;

        for(i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }
        return result;
    };

    /**
     * Returns the first element of the supplied array. When the number is passed,
     * it returns the first element of an array in its value or
     * if the element/value in the array is empty it return the empty array.
     *
     * @function x.first(array, n)
     * @params {Array} array The array value in x.first.
     * @params {number} n The number which is passed to return the first
     * element of an array.
     * @returns {Array, value} If number of elements to be fecthed is provided
     * then returns an array containting first n number of elements. If n number
     * is not provided return the first value of an array
     *
     * @example
     * var firArray = [1,2,3,4,5,6];
     * console.log(x.first(firArray, 2));  // Prints [1, 2]
     *
     * @version 1.0
     */
    x.first = function first(array, n) {

        if(n === undefined) {
            return array[0];
        }
        else {
            return array.splice(array,n);
        }
    };


    /**
     * Returns the last element of the supplied array. When the number is passed,
     * it returns the last element of an array in its value or
     * if the element/value in the array is empty it return the last element of array.
     *
     * @function x.last(array, n)
     * @params {Array} array The array value in x.last.
     * @params {number} n The number which is passed to return the last
     * element of an array.
     * @returns {Array, value} If number of elements to be fecthed is provided
     * then returns an array containting last n number of elements. If n number
     * is not provided return the last value of an array
     *
     * @example
     * var lasArray = [1,2,3,4,5,6];
     * console.log(x.last(lasArray, 2));  // Prints [5,6]
     *
     * @version 1.0
     */
    x.last = function last(array, n) {

        if(n === undefined) {
            return array[array.length-1];
        }
        else {
            return array.splice(array.length-n,n);
        }

    };

    /**
     * Computes the intersection of array with another array and find the dublicates value
     * from both the arrays.
     *
     * @function x.intersection(array1, array2)
     * @params {Array} array1 The array1 value in x.intersection.
     * @params {number} array2 The array2 value in x.intersection
     * @returns {Array1, Array2} Both the array intersect and returns an array
     * containting dublicates number of an elements. If array is not provided
     * its shows the error
     *
     * @example
     * var intrArray1 = [1,2,3,4,5,6];
     * var intrArray2 = [3,4,5,8,9];
     * console.log(x.intersection(intrArray1, intrArray2));  // Prints [3,4,5]
     *
     * @version 1.0
     */
    x.intersection = function intersection(array1, array2) {
        var retArray = [],
            i,j,
            iLen = array1.length,
            jLen = array2.length;

        for(i = 0; i < iLen; i++) {
            for(j = 0; j < jLen; j++) {
                if(array1[i] === array2[j]) {
                    retArray.push(array1[i]);
                }
            }
        }
        return retArray;
    };

    /**
     * Returns the index position of an array. If the value provided
     * in the array,then
     *
     * @function x.indexOf(array, val)
     * @params {Array} array The array value in x.indexOf.
     * @params {number} val The value which needs to be searched for its position.
     * @returns {number} If number of elements to be fecthed is provided
     * then returns a true statement otherwise false statement.If n number
     * is not provided return false statement
     *
     * @example
     * var indxArray = [1,2,3,4,5,6];
     * console.log(x.indexOf(indxArray, 3));  // Prints True
     *
     * @version 1.0
     */
    x.indexOf = function indexOf(array, val) {
        var i,
            iLen = array.length;

        if (array.indexOf) {
            return array.indexOf(val);
        }

        for(i=0; i < iLen; i += 1) {
            if (array[i] === val) {
                return i;
            }
        }
        return -1;
    };

    /**
     * Returns the index value of an array. If the value provided in the array,
     * then return a statement True or False.
     *
     * @function x.exists(array, val)
     * @params {Array} array The array value in x.exists.
     * @params {number} val The value which needs to be searched for its statement.
     * @returns {number} If number of elements to be fecthed is provided
     * then returns a statement of an array either True or False. If n number
     * is not provided return -1 (which means number is not in the array).
     *
     * @example
     * var extArray = [1,2,3,4,5,6];
     * console.log(x.indexValue(extArray, 3));  // Prints 2
     *
     * @version 1.0
     */
    x.exists = function exists(array, val) {
        var i,
            iLen = array.length;

        for(i = 0; i < iLen; i++) {
            if(array[i] === val) {
                return true;
            }
        }
            return false;
    };


    /**
     * Returns the index of the last occurrence of value in the array.
     * If the value provided in the array,then return a last Position of that element.
     *
     * @function x.lastIndexOf(array, val)
     * @params {Array} array The array value in x.lastIndexOf.
     * @params {number} val The value which needs to be searched for its last position.
     * @returns {number} If number of elements to be fecthed is provided
     * an having a dublicate value in that array then returns a last position of the number
     * of an element. If n number is not provided return -1
     * (which means number is not in the array)
     *
     * @example
     * var lstInArray = [1,2,3,4,5,6,2,3,4,5];
     * console.log(x.lastIndexOf(lstInArray, 3));  // Prints 7
     *
     * @version 1.0
     */
    x.lastIndexOf = function lastIndexOf(array, val) {
        var retArr = [],
            i,
            iLen = array.length;

        for(i = 0; i < iLen; i++) {
            if(array[i] === val) {
                return array.lastIndexOf(val);
                }
            }
            return -1;
    };


    /**
     * Uses a binary search to determine the index at which the value should
     * be inserted into the list in order to maintain the list's sorted order
     *
     * @function x.sortedIndex(array, val)
     * @params {Array} array The array value in x.sortedIndex.
     * @params {number} val The value which needs to be searched for its position.
     * @returns {Array , value} If number of elements to be fecthed is provided
     * then return the position of the number of an element. If n number
     * is not provided return the length of that array.
     *
     * @example
     * var sorInArray = [10,20,30,40,50,60];
     * console.log(x.sortedIndex(sorInArray, 35));  // Prints 3
     *
     * @version 1.0
     */
    x.sortedIndex = function sortedIndex (array, val) {
        var i,
            iLen = array.length;

        for(i = 0; i < iLen; i++) {
            if(array[i] >= val) {
                return i;
            }

        }
        return array.length;
    };

    /**
     * Converts arrays into objects. if the value is passed then,
     * it merged the value to that object.
     *
     * @function x.merge(array1, array2)
     * @params {Array} array1 The array1 value in x.merge.
     * @params {number} array2 The array2 is to merged the value in x.merge.
     * @returns {Array1 , Array2} If number of elements array2 is passed then it merged the
     * value with an array1. If array2 value is not provided returns the Error.
     *
     * @example
     * var mergArray = ['moe', 'larry', 'curly'];
     * console.log(x.merge(mergArray, 30, 40, 50));  //Prints {'moe': 30,'larry': 40,'curly': 50}
     *
     * @version 1.0
     */
    x.merge = function merge(array1, array2) {
        var result = {},
            i,
            iLen = array1.length;

        if (array1.length !== array2.length) {
            throw new Error("Both array must have same length");
        }

        for (i = 0; i < iLen; i += 1) {
            result[array1[i]] = array2[i];
        }
        return result;
    };

    /**
     * Returns everything but the last entry of the array is removed.
     *
     * @function x.initial(array, n, val)
     * @params {Array} array The array value in x.initial.
     * @params {number} n The  n number having value in x.initial.
     * @params {number} val The value which needs to be searched to remove the Last entry.
     * @returns {Array, number} If number of an elements is passed then it return everything
     * but last array is removed. If n number value is not provided it return the empty array.
     *
     * @example
     * var initArray = [5,4,3,2,1];
     * console.log(x.initial(initArray, 1));  //Prints [5,4,3,2]
     *
     * @version 1.0
     */
    x.initial = function(array, n, val) {
        return array.slice.call(array, 0, array.length - ((n === null) || val ? 1 : n));
    };

    /**
     * Returns everything but the first entry of the array is removed.
     *
     * @function x.rest(array, n, val)
     * @params {Array} array The array1 value in x.rest.
     * @params {number} n The  n number having null value in x.initial.
     * @params {number} val The value which needs to be searched to remove the First entry.
     * @returns {Array ,n,n1} If number of elements n is passed then it return everything
     * but first array is removed.If n number value is not provided it return the empty array.
     *
     * @example
     * var rstArray = [5,4,3,2,1];
     * console.log(x.rest(rstArray, 1));  //Prints [4,3,2,1]
     *
     * @version 1.0
     */
    x.rest = function(array, n, n1) {
        return array.slice.call(array ,n === null || n1 ? 1 : n);
    };

    /**
     * Returns a copy of the array with all falsy values removed.
     * All falsy value are removed false, null, 0, "", undefined and NaN.
     *
     * @function x.compact(array)
     * @params {Array} array The array1 value in x.compact.
    //   * @returns {number} If the array has all the falsy values it remove the falsy
     * values return only the number of an array
     * If array having all falsy value it return the empty array.
     *
     * @example
     * var compArray = [0, 1, false, 2, '', 3];
     * console.log(x.compact(x));  //Prints [1,2,3]
     *
     * @version 1.0
     */
    x.compact = function compact (array) {
        var retArr=[],
            i,
            iLen = array.length;

        for(i=0; i < iLen; i++) {
            if(array[i]) {
                retArr.push(array[i]);
            }
        }
        return retArr;
    };

    /**
     * Returns a copy of the array with all dublicates value are removed.
     * The value which are repeat in array are removed.
     *
     * @function x.without(array, number)
     * @params {Array} array The array1 value in x.without.
     * @params {number} number The value which needs to be searched
     * to remove the dublicates values.
     * @returns {Array, value} If number of elements to be fecthed is provided
     * then remove the repeated number an return the number of elements.
     * If n number value is not provided it return all the number also the dublicates numbers.
     *
     * @example
     * var witArray = [1, 2, 1, 0, 3, 1, 4];
     * console.log(x.without(witArray, 1, 0));  //Prints [2,3,4]
     *
     * @version 1.0
     */
    x.without =function without(array,number) {
        var i,j,
            iLen = array.length;

        for(i = 0; i < iLen; i++) {
            for(j = 1; j < arguments.length; j++) {
                if(array[i] === arguments[j]) {
                    array.splice(i,1);
                }
            }
        }
        return array;
    };

     /**
     * Merges together the values of each of the arrays with the values at the
     * corresponding position.if the value is passed then,it merged the value
     * to that object
     *
     * @function x.zip(array1, array2, array3)
     * @params {Array} array1 The array1 value in x.zip.
     * @params {number} array2 The array2 is to merged the value in x.zip.
     * @params {number} array2 The array3 is to merged the value in x.zip.
     * @returns {Array2, Array3} If number of elements array2,array3 is passed then
     * it merged the value with an array1. If array2 value is not provided returns the Error.
     *
     * @example
     * var zpArray = ['moe', 'larry', 'curly'];
     * console.log(x.zip(zpArray, [30,40,50], [true,false,false]));
     * //Prints {'moe': 30, true ,'larry': 40, false ,'curly': 50, false}
     *
     * @version 1.0
     */
    x.zip = function zip (array1, array2, array3) {
        var result = [],
            i,
            iLen = array1.length;

        if (array1.length !== array2.length) {
            throw new Error("Both array must have same length");
        }

        for (i = 0; i < iLen; i++) {
            result.push([array1[i],array2[i],array3[i]]);
        }
        return result;
    };

    /**
     * Flattens a nested array
     *
     * @function x.flatten(array, val)
     * @params {Array} array The array value in x.flatten.
     * @params {number} val The val is the value in x.flatten
     * @returns {Array} If array is flatten then remove the flatten from the array and
     * return the number in an array format. If array value is not provided returns the Error.
     *
     * @example
     * var flatArray =  [[1, 2], [3, 4], [5, [6, [7, 8]]]];
     * var retArray = [];
     * x.flatten(flatArray, retArray);
     * console.log(b); // Prints [1,2,3,4,5,6,7,8]
     *
     * @version 1.0
     */
    x.flatten = function flatten(arr, arrOut) {
        if(typeof arrOut === "undefined") {
            var arrOut = [];
        }
            for(var i = 0; i < arr.length; i++) {
                if(Object.prototype.toString.call(arr[i]) === '[object Array]'){
                    arrOut = flatten(arr[i],arrOut);
                }
                else {
                    arrOut.push(arr[i]);
                }
            }

            return arrOut;

    };




    //Array functions in xlib

    /**
     * Retrieve all the names of the object's properties.
     *
     * @function keys(obj)
     * @params {object} obj An object for which all the keys need to be retrived.
     * @returns {Array} Returns a string array of object keys.
     *
     * @example
     * var keyObject = ({one : 1, two : 2, three : 3});
     * console.log(x.keys(keyObject));  // Prints [one, Two, Three]
     *
     * @version 1.0
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
     * Returns all the values of the object's properties.
     *
     * @function keys(obj)
     * @params {object} obj An object for which all the values need to be retrived.
     * @returns {Array} Returns a string array of object values.
     *
     * @example
     * var valObject = ({one : 1, two : 2, three : 3});
     * console.log(x.values(valObject));  // Prints [1, 2, 3]
     *
     * @version 1.0
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
     * Convert an object into list of pairs.
     *
     * @function keys(obj)
     * @params {object} obj An object for which all the pairs need to be retrived.
     * @returns {Array} Returns a string array of object pairs.
     *
     * @example
     * var pairObject = ({one : 1, two : 2, three : 3});
     * console.log(x.pairs(pairObject));  // Prints [["one", 1], ["two", 2], ["three", 3]]
     *
     * @version 1.0
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
     * Returns object where the keys have become the values and the values have become the
     * keys.
     *
     * @function keys(obj)
     * @params {object} obj An object for which all the invert need to be retrived.
     * @returns {Object} Returns a string of object invert.
     *
     * @example
     * var invtObj = ({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});
     * console.log(x.invert(invtObj));
     * // Prints {Moses: "Moe", Louis: "Larry", Jerome: "Curly"}
     *
     * @version 1.0
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
     * Returns a list of name of method object in a sorted format.
     *
     * @function keys(obj)
     * @params {object} obj An object for which all the functions need to be retrived.
     * @returns {Object} Returns a string array of object functions.
     *
     * @example
     * var funObj  = ({
     * name: "test",
     * init: function() {},
     * tpString: function() {
     * return "Function Object";
     * },
     * a: function() {},
     * b: function () {} });
     * console.log(x.functions(funObject));
     * // Prints {'a', 'b', 'init', 'tpString'}
     *
     * @version 1.0
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
     * Returns the name of an object in the sorted format.
     *
     * @function keys(obj)
     * @params {object} obj An object for which all the fields need to be retrived.
     * @returns {Array} Returns a string array of object fields.
     *
     * @example
     * var funObj  = ({
     * name: "test",
     * init: function() {},
     * tpString: function() {
     * return "Function Object";
     * },
     * a: function() {},
     * b: function () {} });
     * console.log(x.fields(funObj));
     * // Prints {'name'}
     *
     * @version 1.0
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
     * Returns the shallow-copied of the object.
     *
     * @function keys(obj)
     * @params {object} obj An object for which all the clone need to be retrived.
     * @returns {Array} Returns a string array of object fields.
     *
     * @example
     * var cloneObj =({name:'moe'}) ;
     * console.log(x.clone(cloneObj));  // Print {name:'moe'}
     *
     * @version 1.0
     */
    x.clone = function clone(obj) {
        if (Object(obj)){
            return obj;
        }
    };
    /**
     *
     *
     */



    root.x = x;

})(this);
