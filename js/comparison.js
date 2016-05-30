'use strict';
function testFalseLooseEqualityComparison() {
  return 'x' == 0
}

function testTrueLooseNonEqualityComparison() {
  return 'x' != 1
}

function testTrueLooseEqualityComparison()  {
  return "1" == 1
}

function testFalseStrictEqualityComparison()  {
  return "x" === 0
}

function testTrueStrictEqualityComparison() {
 return "x" === "x"
}
