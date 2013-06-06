


this.load = function load(x) {

    /**
     * A Range can start and end at any point, and the start and end point may be diferent
     */
    x.range = function range(start, stop, step) {
        var result=[],
            i;

        for(i=start; step > 0 ? i < stop : i > stop;i+=step){
                result.push(i);
        }
        return result;
    };

    /**
     *
     */
    var a = [1,2,3,4,5,6,7,8,9,10];

        x.first = function first(array,number) {

            if(typeof number === "undefined") {
                return array[0];
            }
            else {
                return array.splice(array,number);
            }
        };

    console.log(x.first(a ,2));

    /**
     *
     */

    var b = [1,2,3,4,5,6,7,8,9,10];

        x.last = function last(array,number) {

            if(typeof number === "undefined") {
                return array[0];
            }
            else {
                return array.splice(array.length-number,number);
            }

        };

    console.log(x.last(b,2));

    /**
     *
     */

    var array1 = [1, 2, 3, 4, 5];
    var array2 = [3, 4, 5, 6, 7];

    x.intersection = function intersection(array1, array2) {
    var array3 = [];
        for(var i=0;i<array1.length;i++) {
            for(var j=0;j<array2.length;j++) {

                if(array1[i] === array2[j]) {
                    array3.push(array1[i]);
                }
            }
        }
        return array3;
    };

    console.log(x.intersection(array1, array2));



};