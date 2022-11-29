"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
// Q1
function isTrue(input1) {
    return input1 === true;
}
console.log( "Q1 " + isTrue("banana"));


//Q2
function isFalse(input2) {
    return input2 === false;
}
console.log( "Q2 " + isFalse(false));


//Q3
function not(input3) {
    if (Boolean(input3) !== true) {
        return true;
    } else if (Boolean(input3) !== false) {
        return false;
    }
}
console.log( "Q3 " + not(123));


//Q4
function addOne(input4) {
    if (parseFloat(input4) !== NaN) {
        return (parseFloat(input4) + 1);
    } else {
        return "NaN";
    }
}
console.log( "Q4 " + addOne("banana"));


//Q5
function isEven(input5) {
    return parseFloat(input5) % 2 === 0;
}
console.log( "Q5 " + isEven(false));


//Q6
function isIdentical(input6a, input6b) {
    return input6a === input6b;
}
console.log( "Q6 " + isIdentical(3, 3.0));




//Q7
function isEqual(input7a, input7b) {
    return input7a == input7b;
}
console.log( "Q7 " + isEqual(4, -5));



//Q8
function or(input8a, input8b) {
    return (input8a || input8b);
}
console.log( "Q8 " + or(true, false));


//Q9
function and(input9a, input9b) {
    return (input9a && input9b)
}
console.log( "Q9 " + and("hello", "world"));



//Q10
function concat(input10a, input10b) {
    if ((typeof input10a == "string" || "number") && (typeof input10b == "string" || "number")) {
        return String(input10a) + String(input10b);
    }
}
console.log( "Q10 " + concat("abc", 4));









