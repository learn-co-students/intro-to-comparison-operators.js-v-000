'use strict';

function testFalseLooseEqualityComparison() {
  var intOne = 0,
      intTwo = 1;

  return intOne == intTwo
}

function testTrueLooseNonEqualityComparison() {
  var intOne = 0,
      intTwo = 1;

  return intOne != intTwo
}

function testTrueLooseEqualityComparison() {
  var intOne = 1,
      intTwo = "1";

  return intOne == intTwo
}

function testFalseStrictEqualityComparison() {
  var intOne = 1,
      intTwo = "1";

  return intOne === intTwo
}

function testTrueStrictEqualityComparison() {
  var intOne = 1,
      intTwo = "1";

  return intOne === parseInt(intTwo)
}
