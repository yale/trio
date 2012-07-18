(function() {

  Array.prototype.remove = function(e) {
    var t, _ref;
    if ((t = this.indexOf(e)) > -1) {
      return ([].splice.apply(this, [t, t - t + 1].concat(_ref = [])), _ref);
    }
  };

  String.prototype.padLeft = function(n) {
    if (n < 0) {
      throw "positive n required for padLeft";
    }
    if (this.length > n) {
      throw "string has more than n characters";
    }
    if (this.length === n) {
      return this.toString();
    } else {
      return ("0" + this.toString()).padLeft(n);
    }
  };

}).call(this);
