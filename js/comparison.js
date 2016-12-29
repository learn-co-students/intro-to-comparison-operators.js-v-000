'use strict';

function testFalseLooseEqualityComparison() {
  var one = 1;
  var zero = 0;
  return one == zero;
};

function testTrueLooseNonEqualityComparison() {
  var one = 1;
  var zero = 0;
  return one != zero
};

function testTrueLooseEqualityComparison() {
  var one = 1;
  var oneone = '1';
  return one == oneone;
};

function testFalseStrictEqualityComparison() {
  var one = 1;
  var oneone = "1";
  return one === oneone;
};

function testTrueStrictEqualityComparison() {
  var one = 1;
  var oneone = "1";
  return one === parseInt(oneone);
};
