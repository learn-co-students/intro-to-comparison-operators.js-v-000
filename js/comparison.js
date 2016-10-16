'use strict';

function testFalseLooseEqualityComparison() {
  var foo = 0,
      bar = 1;

  return foo == bar;
}

function testTrueLooseNonEqualityComparison() {
  var foo = 0,
      bar = 1;

  return foo != bar;
}

function testTrueLooseEqualityComparison() {
  var foo = 1,
      bar = 1;

  return foo == bar;
}

function testFalseStrictEqualityComparison() {
  var foo = 1,
      bar = "1";

  return foo === bar;
}

function testTrueStrictEqualityComparison() {
  var foo = 1,
      bar = "1";

  return foo === parseInt(bar);
}
