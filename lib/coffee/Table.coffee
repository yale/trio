class @Table
  constructor: (size)->
    @cards = []
    @size = size
    @tappedCards = new PotentialSet
