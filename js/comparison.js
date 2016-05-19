'use strict';

function testFalseLooseEqualityComparison(){
  var one = 1;
  var zero = 0;
  return one == zero;
}

function testTrueLooseNonEqualityComparison() {
  var one = 1;
  var zero = 0;
  return one != zero;
}

function testTrueLooseEqualityComparison(){
  var one = 1;
  var oneS = "1";
  return one == oneS;
}

function testFalseStrictEqualityComparison(){
  var one = 1;
  var oneS = "1";
  return one === oneS;
}

function testTrueStrictEqualityComparison(){
  var one = 1;
  var oneS = "1";
  return one === parseInt(oneS);
}
