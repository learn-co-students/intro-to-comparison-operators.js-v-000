'use strict';

function testFalseLooseEqualityComparison(){
  var first = 0
  var second = 1
  return first == second;
}

function testTrueLooseNonEqualityComparison(){
  var first = 0
  var second = 1
  return first != second;
}

function testTrueLooseEqualityComparison(){
  var one = 1
  var two = "1"
  return one == two;
}

function testFalseStrictEqualityComparison(){
  var one = 1
  var two = "1"
  return one === two;
}

function testTrueStrictEqualityComparison(){
  var one = 1
  var two = "1"
  return one === parseInt(two);
}