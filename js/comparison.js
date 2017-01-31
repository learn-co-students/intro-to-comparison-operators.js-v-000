'use strict';

//**Loose comparison operators** ( `==` and `!=` ) are quite liberal - they convert type to match one another. This means that values may be considered equal even if they are different types, since the operator will force coercion of one or both operators into a single type (usually a number) before performing a comparison.

//+ Define a function `testFalseLooseEqualityComparison` that does not take any parameters. In this function, define two variables. The first variable should store the integer `0` and the second the integer `1`. The return value of the function should be the evaluation of a loose equality comparison (`==`) of the two variables. The return value should be `false` because `0` and `1` are not the same value.
function testFalseLooseEqualityComparison(){
  var zero = 0;
  var one = 1;

  return zero == one;
}



//+ Define a function `testTrueLooseNonEqualityComparison` that does not take any parameters. In this function, define two variables, one storing `0` and one storing `1`. The return value of the function should be the evaluation of a loose non-equality comparison (`!=`) of the two variables. The return value should be `true` because `0` and `1` are not equal.
function testTrueLooseNonEqualityComparison(){
  var zero = 0;
  var one = 1;

  return zero !== one;

}



//+ Define a function `testTrueLooseEqualityComparison` that does not take any parameters. The function should contain two variables, one storing `1` and one storing `"1"`. The return value should be the evaluation of a loose equality comparison (`==`) between the two variables. The return value should be `true` because in JavaScript `1` and `"1"` are equal in value.
function testTrueLooseEqualityComparison(){
  var strOne = "1";
  var numOne = 1;

  return strOne == numOne;
}


//#### Strict comparison operators

//On the other hand, **strict comparison operators** (`===` and `!==` ) compare both type and value equality.

//+ Define a function `testFalseStrictEqualityComparison` that does not take any parameters. Inside the function define two variables, one that stores `1` and another that stores `"1"`. The return value of the function should be the result of a strict equality comparison (`===`) between the two variables. The return value should be `false` because `1` an `"1"` are not the same data types.
function testFalseStrictEqualityComparison(){
  var strOne = "1";
  var numOne = 1;

  return strOne === numOne;
}



//+ Define a function `testTrueStrictEqualityComparison` that does not take any parameters. Inside the function, define two variables, one that stores `1` and the other stores `"1"`.
//The return value of the function should be the result of a strict equality comparison (`===`) between the variable storing the integer, and the `parseInt` value of the variable storing the string.
function testTrueStrictEqualityComparison(){
  var strOne = "1";
  var numOne = 1;

  return parseInt(strOne) === numOne;
}
