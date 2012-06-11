class Card
  constructor: (int) ->
    @code = (int).toString(4)#.padLeft(4)
  color: ->
    parseInt @code[3]
  shape: ->   
    parseInt @code[2]
  pattern: ->
    parseInt @code[1]
  number: ->
    parseInt @code[0]

class Deck
  constructor: ->
    @cards = (new Card i for i in [0..80])

class Hand
  constructor: () ->
    @cards = []

  pick: (card) ->
    @cards.push(card)
    checkSet and clear if @cards.size == 3

  discard: (card) ->
    @cards.remove(card)

  colors: ->  (card.color   for card in @cards)
  shapes: ->  (card.shape   for card in @cards)
  pattern: -> (card.pattern for card in @cards)
  numbers: -> (card.number  for card in @cards)

class Dealer
  constructor: ->
    @deck = new Deck

  checkSet: (hand) ->
    throw "you need 3 cards to form a set!" if hand.caards.size < 3

    (hand.colors)

Array::sum = ->
  total = 0
  (total += i for i in this)
  return total

Array::remove = (e) -> @[t..t] = [] if (t = @indexOf(e)) > -1

String::padLeft = (n) ->
  debugger
  throw "positive n required for padLeft" if n < 0
  if n == 0
    this
  else
    @padLeft("0" + this, n - 1)
