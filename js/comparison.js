'use strict';

function testFalseLooseEqualityComparison(){
  var zero = 0;
  var one = 1;

  return zero == one;
}

function testTrueLooseNonEqualityComparison() {
  var zero = 0;
  var one = 1;

  return zero != one;
}

function testTrueLooseEqualityComparison() {
  var juan = "1";
  var one = 1;

  return juan == one;
}

function testFalseStrictEqualityComparison() {
  var one = 1, juan = "1";

  return juan === one;
}

function testTrueStrictEqualityComparison() {
  var one = 1, juan = "1"

  return parseInt(juan) === one;
}
