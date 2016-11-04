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
  var one = 1;
  var string = "1";
  return string == one;
}

function testFalseStrictEqualityComparison(){
  var one = 1;
  var string = "1";
  return string === one;
}

function testTrueStrictEqualityComparison(){
  var foo = 1;
  var bar = "1";
  return foo === parseInt(bar);
}
