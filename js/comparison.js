'use strict';

function testFalseLooseEqualityComparison(){
  var zero = 0;
  var one = 1;
  return zero == one;
}

function testTrueLooseNonEqualityComparison(){
  var zero = 0;
  var one = 1;
  return zero != one;
}

function testTrueLooseEqualityComparison(){
  var zero = 1;
  var one = "1";
  return zero == one;
}

function testFalseStrictEqualityComparison(){
  var zero = 1;
  var one = "1";
  return zero === one;
}

function testTrueStrictEqualityComparison() {
  var zero = 1;
  var one = "1";
  return zero === parseInt(one); 
}
