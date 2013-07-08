
    //Collection functions in xjs


    /**
     *
     *
     *
     */
    x.each = function each(collection, func, context) {
        var i,key,
            iLen =collection.length;
        alert(collection[0])
        if(collection instanceof Array || typeof collection === 'String') {
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
     *
     *
     */
    x.find = function find(coll, func, context) {

        if(coll instanceof Array) {
            if(context) {
                for(i = 0, iLen=coll.length; i < iLen; i += 1) {
                    if(coll[i] % 2 === 0) {
                        return func.call(context, coll[i]);

                    }
                }
            }
            else {
                for(i = 0, iLen=coll.length; i < iLen; i += 1) {
                    if(coll[i] % 2 === 0) {
                        return func(coll[i]);

                    }
                }
            }
        }
    };
