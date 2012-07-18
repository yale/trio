(function() {

  describe("PotentialSet", function() {
    var card1, card2, card3, potentialSet;
    potentialSet = new PotentialSet;
    card1 = new Card("0120");
    card2 = new Card("1110");
    card3 = new Card("2100");
    return describe(".isSet()", function() {
      beforeEach(function() {
        return potentialSet.cards = [];
      });
      it("checks if its cards form a set", function() {
        potentialSet.add(card1).add(card2).add(card3);
        return expect(potentialSet.isSet()).toBe(true);
      });
      return it("complains if there are not yet three cards", function() {
        return expect(function() {
          return potentialSet.isSet();
        }).toThrow(new Error("You must have three cards to form a set!"));
      });
    });
  });

}).call(this);
