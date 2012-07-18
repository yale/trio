(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  this.PotentialSet = (function() {

    function PotentialSet() {}

    PotentialSet.prototype.cards = [];

    PotentialSet.prototype.hasCard = function(card) {
      return __indexOf.call(this.cards, card) >= 0;
    };

    PotentialSet.prototype.add = function(card) {
      this.cards.push(card);
      return this;
    };

    PotentialSet.prototype.remove = function(card) {
      this.cards.remove(card);
      return this;
    };

    PotentialSet.prototype.isSet = function() {
      var cards;
      if (this.cards.length !== 3) {
        throw "You must have three cards to form a set!";
      }
      cards = this.cards;
      return ["number", "pattern", "color", "shape"].reduce(function(matching, property) {
        var allPropertiesMatch, sum;
        sum = cards.reduce(function(sum, card) {
          return card[property] + sum;
        }, 0);
        allPropertiesMatch = sum % 3 === 0;
        return allPropertiesMatch && matching;
      }, true);
    };

    return PotentialSet;

  })();

}).call(this);
