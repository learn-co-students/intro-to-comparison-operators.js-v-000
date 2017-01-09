"use strict";

function testFalseLooseEqualityComparison() {
    var var1 = 0;
    var var2 = 1;
    if (var1 == var2) {
        return true;
    } else {
        return false;
    }
}

function testTrueLooseNonEqualityComparison() {
    var var1 = 0;
    var var2 = 1;
    if (var1 != var2) {
        return true;
    } else {
        return false;
    }
}

function testTrueLooseEqualityComparison() {
    var var1 = 1;
    var var2 = "1";
    if (var1 == var2) {
        return true;
    } else {
        return false;
    }
}

function testFalseStrictEqualityComparison() {
    var var1 = 1;
    var var2 = "1";
    if (var1 === var2) {
        return true;
    } else {
        return false;
    }
}

function testTrueStrictEqualityComparison() {
    var var1 = 1;
    var var2 = "1";
    if (var1 == parseInt(var2)) {
        return true;
    } else {
        return false;
    }
}