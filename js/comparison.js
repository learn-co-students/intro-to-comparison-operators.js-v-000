'use strict';

function testFalseLooseEqualityComparison(){
  var zero = 0; 
  var one = 1;
  return zero == one
}

function testTrueLooseNonEqualityComparison(){
  var zero = 0; 
  var one = 1;
  return zero != one
}

function testTrueLooseEqualityComparison(){
  var string = "1"; 
  var one = 1;
  return string == one
}

function testFalseStrictEqualityComparison(){
  var string = "1"; 
  var one = 1;
  return string === one
}

function testTrueStrictEqualityComparison(){
   var string = "1"; 
  var one = 1;
  return string !== one
}