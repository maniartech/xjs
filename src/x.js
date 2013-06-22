
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
