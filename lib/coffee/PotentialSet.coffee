# A Potential Set is a hand of zero, one, two or three cards. When a potential
# set has 3 cards, it is ready to be checked for "setness."
# 
class @PotentialSet
  cards: []

  # We would like to be able to check if a potential set has a given card in it.
  # This will be especially useful when drawing our view - such a card should
  # appear "tapped"
  #
  hasCard: (card)->
    card in @cards

  add: (card)->
    @cards.push(card)
    @

  remove: (card)->
    @cards.remove(card)
    @

  isSet: ->
    throw "You must have three cards to form a set!" unless @cards.length == 3
    cards = @cards
    ["number","pattern","color","shape"].reduce (matching, property) -> 
      # Three cards form a set if for each property they are the same across all cards, or all different;
      # in either case, this means that for each property, the sum of their ternary values will be divisible by 3. 
      #
      # All the same across cards: 3*n for some 0 <= n <= 2. 
      # All different: 0 + 1 + 2 = 3. 
      #
      sum = (cards.reduce (sum, card) -> 
        card[property] + sum
      , 0)
      allPropertiesMatch = sum % 3 == 0 
      allPropertiesMatch and matching
    , true
