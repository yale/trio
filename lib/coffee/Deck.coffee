# A Deck is a collection of all 81 possible Cards.
class @Deck
  constructor: ->
    @cards = (new Card i for i in [0..80])

  shuffle: ->
    true
