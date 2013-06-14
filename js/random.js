/* Random
 *
 * Utility object for random number generation.
 *
 * 2013 - Clif Bratcher
 *
 */
var Random = new function() {
    this.int = function(max) {
        return Math.floor(this.float(max));
    };

    this.float = function(max) {
        return Math.random() * max;
    };

    this.int = function(max) {
        return Math.floor(this.float(max));
    };

    this.bool = function() {
        return this.int(2);
    };

    this.intRange = function(min, max) {
        return min + Random.int(max - min + 1);
    };

    this.floatRange = function(min, max) {
        return min + Random.float(max - min + 1);
    };

    this.element = function(arr) {
      return arr[Random.int(arr.length)];
    };
};
