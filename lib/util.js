var pad = function(n, l) {
  var str = n;
  for (var i = 0; i < (l - n.length); i++) {
    str = "0" + str;
  }
  return str;
}
