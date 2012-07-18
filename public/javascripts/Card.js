(function() {

  this.Card = (function() {

    function Card(code) {
      if (typeof code === "number") {
        this.code = code.toString(3).padLeft(4);
      } else {
        this.code = code;
      }
      this.number = parseInt(this.code[0]);
      this.pattern = parseInt(this.code[1]);
      this.color = parseInt(this.code[2]);
      this.shape = parseInt(this.code[3]);
    }

    return Card;

  })();

}).call(this);
