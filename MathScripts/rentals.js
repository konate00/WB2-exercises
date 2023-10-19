"use strict";

// how many van needed
var people = 38;
var vansSeat = 15;
var vansNeeded = Math.ceil(people / vansSeat);

var vansCost = 250;
var totalVansCost = vansNeeded * vansCost;

var costPerPerson = totalVansCost / people;

console.log(vansNeeded);
console.log(totalVansCost);
console.log("$" + costPerPerson);