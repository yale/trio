(function() {

  describe("String#padLeft", function() {
    it("pads an integer with 0s on the left until it's n characters long", function() {
      expect("1".padLeft(4)).toBe("0001");
      return expect("30".padLeft(3)).toBe("030");
    });
    it("returns the original string if its length == n", function() {
      return expect("1".padLeft(1)).toBe("1");
    });
    it("throws an error if n < 0", function() {
      return expect(function() {
        return "1".padLeft(-1);
      }).toThrow(new Error("positive n required for padLeft"));
    });
    return it("throws an error if the string length is already greater than n", function() {
      return expect(function() {
        return "11111".padLeft(4);
      }).toThrow(new Error("string has more than n characters"));
    });
  });

  describe("Array#remove", function() {
    return it("removes an element from an array", function() {
      var a;
      a = [1, 2, 3];
      a.remove(1);
      expect(a[0]).toBe(2);
      return expect(a[1]).toBe(3);
    });
  });

}).call(this);
