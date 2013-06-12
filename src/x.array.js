
//Array functions in xlib
this.load = function load(x) {
    "use strict";

    /**
     * Returns a new array containing range of numbers based on specified parameters.
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
        var result=[],
            i;

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
     * @params {number} array The array value in x.first.
     * @params {number} n The number which is passed to return the first
     * element of an array.
     * @returns {Array, value} If number of elements to be fecthed is provided
     * then returns an array containting first n number of elements. If n number
     * is not provided return the first value of an array
     *
     * @example
     * var x=[1,2,3,4,5,6];
     * console.log(x.first(x,2));  // Prints [1, 2]
     *
     * @version 1.0
     */

    x.first = function first(array, n) {

        if( n === undefined) {
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
     * @params {number} array The array value in x.last.
     * @params {number} n The number which is passed to return the last
     * element of an array.
     * @returns {Array, value} If number of elements to be fecthed is provided
     * then returns an array containting last n number of elements. If n number
     * is not provided return the last value of an array
     *
     * @example
     * var x=[1,2,3,4,5,6];
     * console.log(x.last(x,2));  // Prints [5,6]
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
     * @function x.intersection(array1,array2 )
     * @params {number} array1 The array1 value in x.intersection.
     * @params {number} array2 The array2 value in x.intersection
     * @returns {Array1, Array2} Both the array intersect and returns an array
     * containting dublicates number of an elements. If array is not provided
     * its shows the error
     *
     * @example
     * var array1=[1,2,3,4,5,6];
     * var array2=[3,4,5,8,9]
     * console.log(x.intersection(array1,array2));  // Prints [3,4,5]
     *
     * @version 1.0
     */

    x.intersection = function intersection(array1, array2) {
        var retArray = [],
            i,j;

        for(i = 0; i < array1.length; i++) {

            for(j = 0; j < array2.length; j++) {

                if(array1[i] === array2[j]) {
                    retArray.push(array1[i]);
                }
            }
        }
        return retArray;
    };

    /**
     * Returns the index at which the value found in the array. If the value provided
     * in the array,then it is true statement otherwise false statement.
     *
     * @function x.indexOf(array , n )
     * @params {number} array The array value in x.indexOf.
     * @params {number} val The value which needs to be searched for its position.
     * @returns {number} If number of elements to be fecthed is provided
     * then returns a true statement otherwise false statement.If n number
     * is not provided return false statement
     *
     * @example
     * var x=[1,2,3,4,5,6];
     * console.log(x.indexOf(x,3));  // Prints True
     *
     * @version 1.0
     */
    x.indexOf = Array.indexOf || function indexOf(array, val) {
        var i,
            iLen = array.length;

        if (array.indexOf) {
            return array.indexOf(n);
        }

        for(i=0; i<iLen; i += 1) {
            if (array[i] === val) {
                return i;
            }
        }
        return -1;
    };

    /**
     * Returns the index value of an array. If the value provided in the array,
     * then return a Position of that element.
     *
     * @function x.exists(array, n)
     * @params {number} array The array value in x.indexValue.
     * @params {number} n The  n number is to find the value in x.indexValue.
     * @returns {Array , value} If number of elements to be fecthed is provided
     * then returns a position of n number of an element .If n number
     * is not provided return -1 (which means number is not in the array)
     *
     * @example
     * var arr = [1,2,3,4,5,6];
     * console.log(x.indexValue(arr, 3));  // Prints 2
     *
     * @version 1.0
     */
    x.exists = function exists(array, val) {

        var i;

            for(i = 0; i < array.length; i++) {
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
     * @function x.lastIndexOf(array , n )
     * @params {number} array The array value in x.lastIndexOf.
     * @params {number} n The  n number is to find the value in x.lastIndexOf.
     * @returns {Array , value} If number of elements to be fecthed is provided
     * an having a dublicate value in the array then returns a last position of n number
     * of an element. If n number is not provided return -1
     * (which means number is not in the array)
     *
     * @example
     * var x=[1,2,3,4,5,6,2,3,4,5];
     * console.log(x.lastIndexOf(x,3));  // Prints 7
     *
     * @version 1.0
     */

    x.lastIndexOf = function lastIndexOf(array,n) {

        var retArr=[],
            i;

            for(i = 0; i < array.length; i++) {
                if(array[i] === n) {
                    return array.lastIndexOf(n);
                }
            }
            return -1;
    };


   /**
     * Uses a binary search to determine the index at which the value should
     * be inserted into the list in order to maintain the list's sorted order
     *
     * @function x.sortedIndex(array , n )
     * @params {number} array The array value in x.sortedIndex.
     * @params {number} n The  n number is to find the value in x.sortedIndex.
     * @returns {Array , value} If number of elements to be fecthed is provided
     * then return the position of n number of an element. If n number
     * is not provided return the length of that array.
     *
     * @example
     * var x=[10,20,30,40,50,60];
     * console.log(x.sortedIndex(x,35));  // Prints 3
     *
     * @version 1.0
     */
    x.sortedIndex = function sortedIndex (array, n) {

        var i;

        for(i = 0; i < array.length; i++) {
            if(array[i] >= n) {
                return i;
            }

        }
        return array.length;
    };

    /**
     * Converts arrays into objects. if the value is passed then,
     * it merged the value to that object
     *
     * @function x.merge(array1, array2 )
     * @params {number} array1 The array1 value in x.merge.
     * @params {number} array2 The  array2 is to merged the value in x.merge.
     * @returns {Array1 , Array2} If number of elements array2 is passed then it merged the
     * value with an array1. If array2 value is not provided returns the Error.
     *
     * @example
     * var x=['moe', 'larry', 'curly'];
     * console.log(x.merge(x,30,40,50));  //Prints {'moe': 30,'larry': 40,'curly': 50}
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
     * @function x.initial(array, n, n1 )
     * @params {number} array The array value in x.initial.
     * @params {number} n The  n number having null value in x.initial.
     * @params {number} n1 The n number value in x.initial.
     * @returns {Array ,n, n1} If number of elements n is passed then it return everything
     * but last array is removed.If n number value is not provided it return the empty array.
     *
     * @example
     * var x=[5,4,3,2,1];
     * console.log(x.initial(x,1));  //Prints [5,4,3,2]
     *
     * @version 1.0
     */
    x.initial = function(array, n, n1) {
        return array.slice.call(array, 0, array.length - ((n === null) || n1 ? 1 : n));
    };

    /**
     * Returns everything but the first entry of the array is removed.
     *
     * @function x.rest(array, n, n1 )
     * @params {number} array The array1 value in x.rest.
     * @params {number} n The  n number having null value in x.initial.
     * @params {number} n1 The n number value in x.initial.
     * @returns {Array ,n,n1} If number of elements n is passed then it return everything
     * but first array is removed.If n number value is not provided it return the empty array.
     *
     * @example
     * var x=[5,4,3,2,1];
     * console.log(x.rest(x,1));  //Prints [4,3,2,1]
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
     * @params {number} array The array1 value in x.compact.
     * @returns {Array} If the array has all the falsy values it remove the falsy
     * values return only the number of an array
     * If array having all falsy value it return the empty array.
     *
     * @example
     * var x=[0, 1, false, 2, '', 3];
     * console.log(x.compact(x));  //Prints [1,2,3]
     *
     * @version 1.0
     */

    x.compact = function compact (array) {
        var retArr=[],
           i;

        for(i=0; i < array.length; i++) {
            if(array[i]){
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
     * @params {number} array The array1 value in x.without.
     * @params {number} number The number is to find the value in x.without.
     * @returns {Array, value} If number of elements to be fecthed is provided
     * then remove the repeated number an return the number of elements.
     * If n number value is not provided it return all the number also the dublicates numbers.
     *
     * @example
     * var x= [1, 2, 1, 0, 3, 1, 4];
     * console.log(x.without(x,1,0));  //Prints [2,3,4]
     *
     * @version 1.0
     */


    x.without =function without(array,number) {
        for(var i = 0; i < array.length; i++){
             for(var j = 1; j < arguments.length; j++){
                if(array[i] === arguments[j]){
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
     * @function x.zip(array1, array2,array3 )
     * @params {number} array1 The array1 value in x.zip.
     * @params {number} array2 The array2 is to merged the value in x.zip.
     * @params {number} array2 The array3 is to merged the value in x.zip.
     * @returns {Array1 , Array2, Array3} If number of elements array2,array3 is passed then
     * it merged the value with an array1. If array2 value is not provided returns the Error.
     *
     * @example
     * var x=['moe', 'larry', 'curly'];
     * console.log(x.zip(x,[30,40,50].[true,false,false]));
     * //Prints {'moe': 30, true ,'larry': 40, false ,'curly': 50, false}
     *
     * @version 1.0
     */

     x.zip = function zip (array1, array2,array3) {

        var result = {},
            i,
            iLen = array1.length;

        if (array1.length !== array2.length) {
            throw new Error("Both array must have same length");
        }

        for (i = 0; i < iLen; i += 1) {
            result [array1[i]] = [array2[i],array3[i]];
        }
        return result;
    };

};
