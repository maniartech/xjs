
//Recognition functions in xlib
this.load = function load(x, undefined) {
    "use strict";

    x.trimL = function trimL(str) {

    };

    x.trimR = function trimR(str) {

    };

    /**
     * Returns the new string by removing leading and trailing spaces in the supplied
     * string.
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     * @references
     * - Faster JavaScript Trims: http://blog.stevenlevithan.com/archives/faster-trim-javascript
     */
    x.trim = function(str) {
        if (str.trim) {
            return str.trim();
        }
    };

    /**
     * Generates and returns the character array from the specified string.
     * @param  {string} str The string to be processed.
     * @return {Array} The charcter array.
     * @exampel
     * var chars = x.toCharArray("hello");
     * console.log(chars); //Prints ['h','e','l','l','o']
     *
     * @version 1.0
     */
    x.toCharArray = function(str) {
        return str.split('');
    };

    //http://stackoverflow.com/questions/494035/how-do-you-pass-a-variable-to-a-regular-expression-javascript
    replaceAll: function replaceAll(str, strReplace, strWith) {

    }
};
