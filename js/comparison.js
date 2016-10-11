'use strict';

function testFalseLooseEqualityComparison()
{
var v1= 0;
var v2= 1;
return (v1 ==v2);
}

function testTrueLooseNonEqualityComparison()
{
  var v1= 0;
  var v2= 1;
  return (v1 !=v2);
}

function testTrueLooseEqualityComparison()
{
  var v1= 1;
  var v2= "1";
  return (v1 == v2);
}

function testFalseStrictEqualityComparison()
{
  var v1= 1;
  var v2= "1";
  return(v1 ===v2);
}

function testTrueStrictEqualityComparison()
{
  var v1=1;
  var v2= "1";
  return (v1 === parseInt(v2));
}
