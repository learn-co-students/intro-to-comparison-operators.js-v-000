'use strict';

function testFalseLooseEqualityComparison() {
  var zero = 0;
  var one = 1;
  return zero == 1;
}
function testTrueLooseNonEqualityComparison() {
  var zero = 0;
  var one = 1;
  return zero != 1;
}
function testTrueLooseEqualityComparison() {
  var st_one = "1";
  var one = 1;
  return st_one == one;
}
function testFalseStrictEqualityComparison() {
  var st_one = "1";
  var one = 1;
  return st_one === one;
}
function testTrueStrictEqualityComparison() {
  var st_one = "1";
  var one = 1;
  return parseInt(st_one) === one;
}
