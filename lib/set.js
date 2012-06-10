var makeDeck = function () {
  var cards = [];
  for (var i = 0; i < 81; i++) {
    cards.push(pad((i).toString(3), 4));
  }
  return cards;
}

var shuffle = function (deck) {
  for (var i = 0; i < deck.length; i++) {
    var randIndex = Math.floor(Math.random() * (deck.length - i) + i);
    tmp = cards[i];
    cards[i] = cards[randIndex];
    cards[randIndex] = tmp;
  }
}

var isSet = function (a, b, c) {
  for (var i = 0; i < 4; i++) {
    if ((parseInt(a[i]) + parseInt(b[i]) + parseInt(c[i]))%3 != 0) {
      return false;
    }
  }
  return true;
}
