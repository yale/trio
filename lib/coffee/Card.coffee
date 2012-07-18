# A Card has four properties: number, pattern, color and shape.
#
# Ex. three shaded purple ovals
#     one solid red diamond
#     two empty green squiggles
# 
class @Card
  constructor: (code) ->
    # We represent a card using a 4 digit integer in base 3. We start with 0 ("0000"
    # in base 3), and go up to 80 ("2222"), totaling 81 cards.
    #
    # You can initialize a card either with an integer from 0 to 80, or a string
    # of the code itself.
    if typeof code == "number"
      @code = (code).toString(3).padLeft(4)
    else
      @code = code
    @number = parseInt @code[0]
    @pattern = parseInt @code[1]
    @color = parseInt @code[2]
    @shape = parseInt @code[3]
