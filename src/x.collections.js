
    //Collection functions in xjs


    /**

     * Iterates over a list of elements that  handles objects built-in arrays and objects.
     *
     * @function x.each(collection, callback, context)
     * @params {array, string, object} collection The collection that needs to be iterated.
     * @params {funtion} callback The callback which is supposed to be called for each item in the collection during iteration.
     * @params {context} context The context in which callback is invoked.
     *
     * @example
     * //print 1, 2, 3, 4, 5, 6 in the consoleection
     * x.each([1, 2, 3, 4, 5, 6],function(num){
     *    console.log(num);
     * });
     *
     * //print 1, 2, 3 in the console.
     * x.each({One:1, Two:2, Three:3},function(num){
     *    console.log(num);
     * });
     * //print abc,pqr,xyz in the console
     * each(["abc", "pqr", "xyz"],function(num){
     *   console.log(num);
     * });
     *
     * @version 1.0
     **/
    x.each = function each(collection, callback, context) {
        var i,key,
            iLen =collection.length;

        if(collection instanceof Array || typeof collection === 'string') {
            if (context !== undefined) {
                for(i = 0; i < iLen; i += 1) {
                    callback.call(context, i, collection[i]);
                }
            }
            else {
                for(i = 0; i < iLen; i += 1) {
                    callback(collection[i]);
                }
            }
        }else {
            if(collection === Object(collection)){
                if (context !== undefined) {
                    for(key in collection) {
                        callback.call(context, key, collection[key]);
                    }
                }
                else {
                    for(key in collection) {
                        callback(collection[key]);
                    }
                }
            }
        }
    };

    /**
     * Return the first value which passes a truth test.
     *
     * @function x.find(array, callback, context)
     * @params {array} array The array that needs to be iterated.
     * @params {funtion} callback The callback which is supposed to be called for each item in the array during iteration.
     * @params {context} context The context in which callback is invoked.
     * @return {number} If array is provided it return the element.
     *
     * @example
     * //print 2 in the return
     * console.log(x.find([1, 2, 3, 4, 5, 6],function(num){
     *    return num % 2 === 0;
     * }));
     *
     * @version 1.0
     **/
    x.find = function find(array, callback, context) {
        var i, iLen;

        if(array instanceof Array) {
            if(context) {
                for(i = 0, iLen=array.length; i < iLen; i += 1) {
                    if (callback.call(context, array[i]) === true) {
                        return array[i];
                    }
                }
            }
            else {
                for(i = 0, iLen=array.length; i < iLen; i += 1) {
                    if (callback(array[i]) === true) {
                        return array[i];
                    }
                }
            }
        }
        return null;
    };
    /**
     * Return all the elements that pass a truth test.
     *
     * @function x.find(array, callback, context)
     * @params {array} array The array that needs to be iterated.
     * @params {funtion} callback The callback which is supposed to be called for each item in the array during iteration.
     * @params {context} context The context in which callback is invoked.
     * @return {array} If array is provided it return the array of that element.
     *
     * @example
     * //print [2, 4, 6] in the return
     * console.log(x.filter([1, 2, 3, 4, 5, 6],function(num){
     *    return num % 2 === 0;
     * }));
     *
     * @version 1.0
     **/
    x.filter = function filter(collection, callback, context) {
        var i, iLen,
            arr = [];

        if(collection instanceof Array || typeof collection === 'string') {
            if(context) {
                for(i = 0, iLen=collection.length; i < iLen; i += 1) {
                    if (callback.call(context, collection[i]) === true) {
                        arr[arr.length] = collection[i];
                    }
                }
            }
            else {
                for(i = 0, iLen=collection.length; i < iLen; i += 1) {
                    if (callback(collection[i]) === true) {
                        arr[arr.length] = collection[i];
                    }
                }
            }
        }
        return arr;
    };

    /**
     * Return all the elements for which a truth test fails
     *
     * @function x.reject(array, callback, context)
     * @params {array} array The array that needs to be iterated.
     * @params {funtion} callback The callback which is supposed to be called for each item in the array during iteration.
     * @params {context} context The context in which callback is invoked.
     * @return {array} If array is provided it return the array of that element.
     * @example
     *
     * //print [1, 3, 5] in the return
     * console.log(x.reject([1, 2, 3, 4, 5, 6],function(num){
     *    return num % 2 !== 0;
     * }));
     *
     * @version 1.0
     **/
    x.reject = function reject(array, callback, context) {
        var i, iLen,
            arr = [];

        if(array instanceof Array || typeof array === 'string') {
            if(context) {
                for(i = 0, iLen=array.length; i < iLen; i += 1) {
                    if (callback.call(context, array[i]) === true) {
                        arr[arr.length] = array[i];
                    }
                }
            }
            else {
                for(i = 0, iLen=array.length; i < iLen; i += 1) {
                    if (callback(array[i]) === true) {
                        arr[arr.length] = array[i];
                    }
                }
            }
        }
        return arr;
    };
    /**
     * Determine if the array contains a given value
     *
     * @function x.contains(array, val)
     * @params {array} array The array is the value in x.contains.
     * @params {val} number Any value which need to be test in a array.
     * @return {boolean} If array is provided it return the ture or false statement.
     *
     * @example
     * // Print true in the return
     * console.log(x.contains([1, 2, 3,],3);
     *
     * @version 1.0
     **/
    x.contains = function contains(array, val) {
        var i,
            iLen = array.length;
        for(i=0; i < iLen; i++) {
            if(array.indexOf(val)!== -1) {
                return true;
            }
        }
        return false;
    };

    /**
     * Determine if the array contains a given value
     *
     * @function x.contains(array, val)
     * @params {array} array The array is the value in x.contains.
     * @params {val} number Any value which need to be test in a array.
     * @return {boolean} If array is provided it return the ture or false statement.
     *
     * @example
     * // Print true in the return
     * console.log(x.contains([1, 2, 3,],3);
     *
     * @version 1.0
     **/
    x.pluck = function pluck(list, propertyName) {
        var Arr = [],
            i,
            iLen= list.length;

        for(i = 0; i < iLen; i++) {
            Arr[i] = list[i][propertyName];
        }
        return Arr;
    };

    /**
     *
     **/
    x.size = function size(obj) {
        var i = 0,
            key;

        for (key in obj) {
            i++;
        }
        return i;
    };

    /**
     *
     **/
    x.shuffle = function shuffle(array) {
        var counter = array.length,
            temp,
            index;

        while (counter > 0) {
            index = Math.floor(Math.random() * counter);
            counter--;
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    };
    /**
     *
     **/