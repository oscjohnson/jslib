Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

Array.prototype.average = function() {
  return this.reduce(function(a, b) { return a + b; }) / this.length;
};

Array.prototype.repeat = function (len) {
  if (this.length !== 1) throw Error("The array can only contain one value")

  function fillArray(value, len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
      arr.push(value);
    }
    return arr;
  }

  return fillArray(this[0], len)
}

Array.prototype.remove = function (element) {
  var index = this.indexOf(element);
  if (index > -1) {
    this.splice(index, 1);
  }
  return this
}

Object.map = function(o, f, ctx) {
    ctx = ctx || this;
    var result = {};
    Object.keys(o).forEach(function(k) {
        result[k] = f.call(ctx, o[k], k, o);
    });
    return result;
}

Object.prototype.reduce = function( reduceCallback, initialValue ) {
    var obj = this, keys = Object.keys( obj );

    return keys.reduce( function( prevVal, item, idx, arr ) {
        return reduceCallback( prevVal, item, obj[item], obj );
    }, initialValue );
};


function timemethod(fn, msg) {
  var t0 = performance.now();
  fn();
  var t1 = performance.now();

  console.log(msg || "", t1 - t0)
}
