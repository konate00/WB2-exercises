"use strict";

// Description: This script tests various numeric
// conversion techniques
// Author: Jordan Q. Newprogrammer

var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";

"use strict";

    //Unary + results " 101.1 "
var a =+ (" 101.1. ");

console.log(a);
    // Unary + results "55"
var a =+ ("55")
console.log(a);
    // Unary + results "402 Stevens"
var a =+ ("402 Stevens")
console.log(a);
    //Unary + results "Number 5 "
var a =+ ("Number 5 ");
console.log(a);
        // Number(" 101.1  ")
var a = Number(" 101.1  ");
console.log(a); // result 101.1

         // Number("55")
var a = Number("55");
console.log(a); // result 55

            // Number("Number 5 ")
var a = Number("Number 5 ");
console.log(a); // result NaN

            // Number(" 101.1")
var a = Number(" 101.1 ");
console.log(a); // result NaN

