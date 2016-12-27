'use strict';

function testFalseLooseEqualityComparison(){
  var one = 1;
  var zero = 0;
  return one == zero;
}

function testTrueLooseNonEqualityComparison(){
  var one = 1;
  var zero = 0;
  return one != zero;
}

function testTrueLooseEqualityComparison(){
  var one = 1;
  var zero = 1;
  return one == zero;
}

function testFalseStrictEqualityComparison(){
  var one = 1;
  var other = "1";
  return one === other;
}

function testTrueStrictEqualityComparison(){
  var one = 1;
  var other = "1";
  return one === parseInt(other);

}
