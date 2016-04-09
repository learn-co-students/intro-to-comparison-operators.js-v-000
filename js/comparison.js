'use strict';
function testFalseLooseEqualityComparison(){
  var integer = 1;
  var integer2 = 0;
  return integer == integer2;
}

function testTrueLooseNonEqualityComparison(){
  var integer = 1;
  var integer2 = 0;
  return integer != integer2;
}

function testTrueLooseEqualityComparison(){
  var integer = 1;
  var string = "1";
  return integer == string;
}

function testFalseStrictEqualityComparison(){
  var integer = 1;
  var string = "1";
  return integer === string;
}

function testTrueStrictEqualityComparison(){
  var integer = 1;
  var string = "1";
  return integer === parseInt(string);
}