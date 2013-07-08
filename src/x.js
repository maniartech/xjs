
    var FORMAT_EXP = /(\$\d+)|(\$\w+)/g,
        x;

    /**
     * @function x(str, context)
     * @param  {[type]} str     [description]
     * @param  {[type]} context [description]
     * @return {[type]}         [description]
     *
     * @example
     * var text = x("Hello $1!", "World"); //Returns "Hello World!"
     *
     **/
    x = function x(str, context) {
        var key;

        if (context === undefined) {
            return str;
        }

        if (context === Object(context)){
            for(key in context) {

            }
        }

        if (arguments.length < 2) {
            return str;
        }

        //if (arguments.length === 2 && typeof)

    };

    var wow = false;

    x.version = "1.0.0";
