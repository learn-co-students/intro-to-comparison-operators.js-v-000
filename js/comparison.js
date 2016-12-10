'use strict';

function testFalseLooseEqualityComparison() {
  var apple = 0;
  var orange = 1;
  return (apple == orange);
}

function testTrueLooseNonEqualityComparison() {
  var x = 0;
  var y = 1;
  return (x != y);
}


function testTrueLooseEqualityComparison() {
  var i = 1;
  var j = "1";
  return i == j;
}

function testFalseStrictEqualityComparison() {
  var i = 1;
  var j = "1";
  return i === j;
}

function testTrueStrictEqualityComparison() {
  var i = 1;
  var j = "1";
  return i === parseInt(j);
}
