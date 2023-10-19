"use strict";

var payRate = 10;
var hoursWorked = 32;
var overtimeHours = hoursWorked - 40;

if (hoursWorked > 40) {
    overtimeHours = hoursWorked - 40;
}
else
{
    overtimeHours = 0;
}
var grossPay = (payRate * hoursWorked) + (overtimeHours * payRate * 1.5);
console.log("Gross Pay: $" + grossPay.toFixed(2));
console.log( + overtimeHours + " overtime hours worked");




// var grossPay = (payRate * hoursWorked) + (overtimeHours * payRate * 1.5);

// if (overtimeHours < 40){
//     overtimeHours = 0;
// }