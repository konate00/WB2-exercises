"use strict" 

var lenght = 30;
var width = 9;
var tilePerBox = 12;
var squareFooted = lenght * width;
var numberOfBoxes = Math.ceil (squareFooted / tilePerBox);

console.log(numberOfBoxes);