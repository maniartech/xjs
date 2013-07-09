
    //Collection functions in xjs


    /**
     *
     *
     *
     **/
    x.each = function each(collection, func, context) {
        var i,key,
            iLen =collection.length;

        if(collection instanceof Array || typeof collection === 'string') {
            if (context !== undefined) {
                for(i = 0; i < iLen; i += 1) {

                    func.call(context, i, collection[i]);
                }
            }
            else {
                for(i = 0; i < iLen; i += 1) {
                    func(collection[i]);
                }
            }
        }
        else {
            if(collection === Object(collection)){
                if (context !== undefined) {
                    for(key in collection) {
                        func.call(context, key, collection[key]);
                    }
                }
                else {
                    for(key in collection) {
                        func(collection[key]);
                    }
                }
            }
        }
    };

    /**
     *
     **/
    x.find = function find(coll, func, context) {
        var i, iLen;

        if(coll instanceof Array || typeof coll === 'string') {
            if(context) {
                for(i = 0, iLen=coll.length; i < iLen; i += 1) {
                    if (func.call(context, coll[i]) === true) {
                        return coll[i];
                    }
                }
            }
            else {
                for(i = 0, iLen=coll.length; i < iLen; i += 1) {
                    if (func(coll[i]) === true) {
                        return coll[i];
                    }
                }
            }
        }
        return null;
    };
    /**
     *
     **/
    x.filter = function filter(coll, func, context) {
        var i, iLen,
            arr = [];

        if(coll instanceof Array || typeof coll === 'string') {
            if(context) {
                for(i = 0, iLen=coll.length; i < iLen; i += 1) {
                    if (func.call(context, coll[i]) === true) {
                        arr[arr.length] = coll[i];
                    }
                }
            }
            else {
                for(i = 0, iLen=coll.length; i < iLen; i += 1) {
                    if (func(coll[i]) === true) {
                        arr[arr.length] = coll[i];
                    }
                }
            }
        }
        return arr;
    };

    /**
     *
     **/
    x.reject = function reject(coll, func, context) {
        var i, iLen,
            arr = [];

        if(coll instanceof Array || typeof coll === 'string') {
            if(context) {
                for(i = 0, iLen=coll.length; i < iLen; i += 1) {
                    if (func.call(context, coll[i]) === true) {
                        arr[arr.length] = coll[i];
                    }
                }
            }
            else {
                for(i = 0, iLen=coll.length; i < iLen; i += 1) {
                    if (func(coll[i]) === true) {
                        arr[arr.length] = coll[i];
                    }
                }
            }
        }
        return arr;
    };
    /**
     *
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
     *
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