'use strict';
function testFalseLooseEqualityComparison(){
    var zero_num = 0;
    var one_num = 1;
    return zero_num == one_num;
}

function testTrueLooseNonEqualityComparison(){
    var zero_num = 0;
    var one_num = 1;
    return zero_num != one_num;
}

function testTrueLooseEqualityComparison(){
    var one_num = 1;
    var one_string = "1";
    return one_num == one_string;
}

function testFalseStrictEqualityComparison(){
    var one_num = 1;
    var one_string = "1";
    return one_num === one_string;
}

function testTrueStrictEqualityComparison(){
    var one_num = 1;
    var one_string = "1";
    return one_num === parseInt(one_string, 10);
}
