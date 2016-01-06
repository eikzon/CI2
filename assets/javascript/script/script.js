(function() {
  var cube, square;

  square = function(x) {
    return x * x;
  };

  cube = function(x) {
    return square(x) * x;
  };

  alert(cube(10));

}).call(this);
