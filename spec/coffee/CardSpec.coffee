describe "Card", ->
  card = new Card(64)

  it "converts int to 4-digit ternary code", ->
    expect(card.code).toBe("2101")

  it "accepts a string as its code", ->
    expect((new Card("2101")).code).toBe(card.code)

  it "uses the first 3-bit for number", ->
    expect(card.number).toBe(2)

  it "uses the second 3-bit for pattern", ->
    expect(card.pattern).toBe(1)

  it "uses the third 3-bit for color", ->
    expect(card.color).toBe(0)

  it "uses the last 3-bit for shape", ->
    expect(card.shape).toBe(1)
