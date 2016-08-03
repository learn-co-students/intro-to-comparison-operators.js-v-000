'use strict';

function testFalseLooseEqualityComparison() {
  var bar = 0;
  var foo = 1;
  return bar == foo;
}

function testTrueLooseNonEqualityComparison() {
  var bar = 0;
  var foo = 1;
  return bar != foo;
}

function testTrueLooseEqualityComparison() {
  var bar = 1;
  var foo = "1";
  return bar == foo;
}

function testFalseStrictEqualityComparison(){
  var foo = 1;
  var yoo = '1';
  return foo === yoo;
}

function testTrueStrictEqualityComparison(){
  var foo = 1;
  var yoo = '1';
  return foo === parseInt(yoo);
}
