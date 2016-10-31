'use strict';

function testFalseLooseEqualityComparison() {
  var one = 1;
  var two = 2;
  return one == two;
}

function testTrueLooseNonEqualityComparison() {
  var one = 1;
  var two = 2;
  return one != two;
}

function testTrueLooseEqualityComparison() {
  var one = 1 ;
  var onee = "1";
  return one == onee;
}

function testFalseStrictEqualityComparison() {
  var one = 1;
  var onee = "1";
  return one === onee;
}

function testTrueStrictEqualityComparison() {
  var one = 1;
  var onee = "1";
  return one == parseInt(onee);

}
