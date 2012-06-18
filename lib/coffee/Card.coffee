# A Card has four properties: number, pattern, color and shape.
#
# Ex. three shaded purple pills
#     one solid red diamond
#     two empty green squiggles
# 
class @Card
  constructor: (int) ->
    # We represent a card with a 4 digit integer in base 3. We start with 0 ("0000"
    # in base 3), and go up to 80 ("2222"), totaling 81 cards.
    #
    @code = int.toString(4).padLeft(4)
  @color: ->
    parseInt @code[3]
  @shape: ->   
    parseInt @code[2]
  @pattern: ->
    parseInt @code[1]
  @number: ->
    parseInt @code[0]
