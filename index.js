Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

Array.prototype.average = function() {
	return this.reduce(function(a, b) { return a + b; }) / this.length;
};