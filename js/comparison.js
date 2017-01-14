'use strict';

function testFalseLooseEqualityComparison(){
  var variableOne = 0;
  var variableTwo = 1;
  return variableOne == variableTwo;
}

function testTrueLooseNonEqualityComparison(){
  var variableOne = 0;
  var variableTwo = 1;
  return variableOne != variableTwo;
}

function testTrueLooseEqualityComparison(){
  var variableOne = 1;
  var variableTwo = "1";
  return variableOne == variableTwo;
}
// returns true because the "==" above is a 'loose' comaprison operator


function testFalseStrictEqualityComparison(){
  var variableOne = 1;
  var variableTwo = "1";
  return variableOne === variableTwo;
}

function testTrueStrictEqualityComparison(){
  var variableOne = 1;
  var variableTwo = "1"; 
  return variableOne === parseInt(variableTwo, 10)
}
