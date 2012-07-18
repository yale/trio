(function() {

  this.Table = (function() {

    function Table(size) {
      this.cards = [];
      this.size = size;
      this.tappedCards = new PotentialSet;
    }

    return Table;

  })();

}).call(this);
