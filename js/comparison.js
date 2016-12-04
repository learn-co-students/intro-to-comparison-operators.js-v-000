function testFalseLooseEqualityComparison() {
  var foo = 0;
  var bar = 1;
  if (foo == bar) {
    return true;
  } else {
    return false; 
  }
}

testFalseLooseEqualityComparison();

function testTrueLooseNonEqualityComparison() {
  var fizz = 0;
  var buzz = 1;
  return fizz != buzz;
}

function testTrueLooseEqualityComparison() {
  var fizz = 1;
  var buzz = "1";
  return fizz == buzz;
}

function testFalseStrictEqualityComparison() {
  var fizz = 1;
  var buzz = "1";
  return fizz === buzz;
}

function testTrueStrictEqualityComparison() {
  var fizz = 1;
  var buzz = "1";
  return fizz === parseInt(buzz);
}