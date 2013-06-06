


this.load = function load(x) {
    "use strict";

    /**
     * A Range can start and end at any point, and the start and end point may be diferent
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
     * A X.first is use to select a starting number from array
     */
    x.first = function first(array1,number) {

        if(number === undefined) {
            return array1[0];
        }
        else {
            return array1.splice(array1,number);
        }
    };


    /**
     *
     */

    x.last = function last(array1, number) {

        if(number === undefined) {
            return array1[array1.length-1];
        }
        else {
            return array1.splice(array1.length-number,number);
        }

    };


    /**
     *
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
     *
     */


    x.indexofbool = function indexofbool(array1,number) {

        return array1.indexOf(number) !== -1;
    };

    /**
     *
     */
    x.indexofvalue = function indexofvalue(array1,number) {

        var i;

            for(i = 0; i < array1.length; i++) {
                if(array1[i] === number) {
                    return i;
                }
            }
            return -1;
    };

    /**
     *
     */

    x.lastindexof = function lastindexof(array1,number) {

        var retArr=[],
            i;

            for(i = 0; i < array1.length; i++) {
                if(array1[i] === number) {
                    return array1.lastIndexOf(number);
                }

            }
            return -1;
    };

    /**
     *
     */

    x.sortedIndex = function sortedIndex (array1, number) {

        var i;

        for(i = 0; i < array1.length; i++) {
            if(array1[i] >= number) {
                return i;
            }

        }
        return array1.length;
    };

    /**
     *
     */
     x.merged = function merged(array1, array2) {

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


