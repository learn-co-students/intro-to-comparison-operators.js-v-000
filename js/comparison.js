'use strict';
function testFalseLooseEqualityComparison(){
  var zero = 0, one = 1;
  return zero == one;
}

function testTrueLooseNonEqualityComparison(){
  var zero = 0, one = 1;
  return zero != one;
}

function testTrueLooseEqualityComparison(){
  var oneNum = 1, oneStr = '1';
  return oneNum == oneStr;
}

function testFalseStrictEqualityComparison(){
  var oneNum = 1, oneStr = '1';
  return oneNum === oneStr;
}

function testTrueStrictEqualityComparison(){
  var oneNum = 1, oneStr = '1';
  return oneNum === parseInt(oneStr,10);  
}