'use strict';

function testFalseLooseEqualityComparison() {
  var zero = 0;
  var one  = 1;
  return zero == one;
}

function testTrueLooseNonEqualityComparison() {
  var zero = 0;
  var one  = 1;
  return zero != one;
}