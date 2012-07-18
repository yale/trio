(function() {

  this.Hand = (function() {

    function Hand() {
      this.cards = [];
    }

    Hand.prototype.pick = function(card) {
      return this.cards.push(card);
    };

    Hand.prototype.discard = function(card) {
      return this.cards.remove(card);
    };

    Hand.prototype.colors = function() {
      var card, _i, _len, _ref, _results;
      _ref = this.cards;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        card = _ref[_i];
        _results.push(card.color);
      }
      return _results;
    };

    Hand.prototype.shapes = function() {
      var card, _i, _len, _ref, _results;
      _ref = this.cards;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        card = _ref[_i];
        _results.push(card.shape);
      }
      return _results;
    };

    Hand.prototype.patterns = function() {
      var card, _i, _len, _ref, _results;
      _ref = this.cards;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        card = _ref[_i];
        _results.push(card.pattern);
      }
      return _results;
    };

    Hand.prototype.numbers = function() {
      var card, _i, _len, _ref, _results;
      _ref = this.cards;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        card = _ref[_i];
        _results.push(card.number);
      }
      return _results;
    };

    return Hand;

  })();

}).call(this);
