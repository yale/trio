describe "PotentialSet", ->
  potentialSet = new PotentialSet
  card1 = new Card("0120")
  card2 = new Card("1110")
  card3 = new Card("2100")

  describe ".isSet()", ->
    beforeEach ->
      potentialSet.cards = []

    it "checks if its cards form a set", ->
      potentialSet.add(card1).add(card2).add(card3)
      expect(potentialSet.isSet()).toBe(true)

    it "complains if there are not yet three cards", ->
      expect(-> potentialSet.isSet()).toThrow(new Error "You must have three cards to form a set!")
