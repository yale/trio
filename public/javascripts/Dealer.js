(function() {

  this.Dealer = (function() {

    function Dealer() {
      this.deck = new Deck;
    }

    Dealer.prototype.checkSet = function(hand) {
      if (hand.cards.size < 3) {
        throw "you need 3 cards to form a set!";
      }
      return hand.colors;
    };

    return Dealer;

  })();

}).call(this);
