function testFalseLooseEqualityComparison() {
  var a=0
  var b=1
  return a==b
}

function testTrueLooseNonEqualityComparison() {
  var a=0
  var b=1
  return a!=b
}

function testTrueLooseEqualityComparison() {
  a=1
  b="1"
  return a==b
}

function testFalseStrictEqualityComparison() {
  a=1
  b="1"
  return a===b
}

function testTrueStrictEqualityComparison() {
  a=1
  b="1"
  return a===parseInt(b)
}
