(function() {

  this.Deck = (function() {

    function Deck() {
      var i;
      this.cards = (function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; _i <= 80; i = ++_i) {
          _results.push(new Card(i));
        }
        return _results;
      })();
    }

    Deck.prototype.shuffle = function() {
      return true;
    };

    return Deck;

  })();

}).call(this);
