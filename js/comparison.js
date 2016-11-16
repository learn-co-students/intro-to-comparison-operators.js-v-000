'use strict';

function testFalseLooseEqualityComparison() {
  var one = 1;
  var zero = 0;
  return one == zero;
}

function testTrueLooseNonEqualityComparison() {
  var one = 1;
  var zero = 0;
  return one != zero;
}

function testTrueLooseEqualityComparison() {
  var one = 1;
  var quotes = "1";
  return one == quotes;
}

function testFalseStrictEqualityComparison() {
  var one = 1;
  var quotes = "1";
  return one === quotes;
}

function testTrueStrictEqualityComparison() {
  var one = 1;
  var quotes = "1";
  return one === parseInt(quotes);
}
