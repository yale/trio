Array::remove = (e) -> @[t..t] = [] if (t = @indexOf(e)) > -1

String::padLeft = (n) ->
  throw "positive n required for padLeft"   if n < 0
  throw "string has more than n characters" if @length > n
  if @length == n
    @toString()
  else
    ("0" + @toString()).padLeft(n)
