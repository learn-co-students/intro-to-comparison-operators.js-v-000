'use strict';

function testFalseLooseEqualityComparison(){
   var a = 0;
   var b = 1;
    return (a == b)
}

function testTrueLooseNonEqualityComparison(){
   var a = 0;
   var b = 1;
    if(a != b){
      return true;
    }
}
function testTrueLooseEqualityComparison(){
   var a = 1;
   var b = 1;
    if(a == b){
      return true;
    }
}


function testFalseStrictEqualityComparison(){
  var a = 1;
  var b = "1";
  return (a === b);
}

function testTrueStrictEqualityComparison(){
  var a = 1;
  var b = "1";
  return (a === parseInt(b));
}
