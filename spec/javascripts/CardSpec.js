(function() {

  describe("Card", function() {
    var card;
    card = new Card(64);
    it("converts int to 4-digit ternary code", function() {
      return expect(card.code).toBe("2101");
    });
    it("accepts a string as its code", function() {
      return expect((new Card("2101")).code).toBe(card.code);
    });
    it("uses the first 3-bit for number", function() {
      return expect(card.number).toBe(2);
    });
    it("uses the second 3-bit for pattern", function() {
      return expect(card.pattern).toBe(1);
    });
    it("uses the third 3-bit for color", function() {
      return expect(card.color).toBe(0);
    });
    return it("uses the last 3-bit for shape", function() {
      return expect(card.shape).toBe(1);
    });
  });

}).call(this);
