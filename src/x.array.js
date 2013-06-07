


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
     * @params {number} n The n number value which is provided to find the statement.
     * @returns {Array , value} If number of elements to be fecthed is provided
     * then returns a true statement otherwise false statement.If n number
     * is not provided return false statement
     *
     * @example
     * var x=[1,2,3,4,5,6];
     * console.log(x.indexOf(x,3));  // Prints True
     *
     * @version 1.0
     */
    x.indexOf = function indexOf(array,n) {

        return array.indexOf(n) !== -1;
    };

    /**
     * Returns the index value of an array. If the value provided in the array,
     * then return a Position of that element.
     *
     * @function x.indexValue(array , n )
     * @params {number} array The array value in x.indexValue.
     * @params {number} n The  n number is to find the value in x.indexValue.
     * @returns {Array , value} If number of elements to be fecthed is provided
     * then returns a position of n number of an element .If n number
     * is not provided return -1 (which means number is not in the array)
     *
     * @example
     * var x=[1,2,3,4,5,6];
     * console.log(x.indexValue(x,3));  // Prints 2
     *
     * @version 1.0
     */
    x.indexValue = function indexValue(array,n) {

        var i;

            for(i = 0; i < array.length; i++) {
                if(array[i] === n) {
                    return i;
                }
            }
            return -1;
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



  };
