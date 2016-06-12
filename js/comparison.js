'use strict';

function testFalseLooseEqualityComparison(){
  var zero = 0;
  var one = 1;
  return zero == 1;
}

function testTrueLooseNonEqualityComparison(){
  var zero = 0;
  var one = 1;
  return zero != 1;
}

function testTrueLooseEqualityComparison(){
  var oneNumber = 1;
  var one = "1";
  return oneNumber == one;
}

function testFalseStrictEqualityComparison(){
  var oneNumber = 1;
  var one = "1";
  return oneNumber === one;

}

function testTrueStrictEqualityComparison(){
  var oneNumber = 1;
  var one = parseInt("1");
  return oneNumber === one;
}
