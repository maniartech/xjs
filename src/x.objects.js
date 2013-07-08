
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
     **/
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
     **/
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
     **/

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
     **/
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
     **/
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
     **/
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
     **/
    x.clone = function clone(obj) {
        if (Object(obj)) {
            return obj;
        }
    };
    /**
     *
     *
     **/

