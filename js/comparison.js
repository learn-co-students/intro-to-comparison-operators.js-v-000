'use strict';

function testFalseLooseEqualityComparison() {
  var third = 0;
  var fourth = 1;
  return third == fourth;
  // should return false because 0 is not equal to 1
}

function testTrueLooseNonEqualityComparison() {
  var fifth = 1;
  var sixth = 0;
  return fifth != sixth;
  // should return true because they're not equal 
}

function testTrueLooseEqualityComparison() {
  var seventh = 1;
  var eighth = "1";
  return seventh == eighth;
}

function testFalseStrictEqualityComparison() {
  var ninth = 1;
  var tenth = "1";
  return ninth === tenth;
  // should be false because 1 an "1" are not the same data types
}

function testTrueStrictEqualityComparison() {
  var first = 1;
  var second = '1';
  return first === parseInt(second);
}