// From Matt repo
"use strict";

let annualIncome = 120000;
let filingStatus = "Joint";

let taxRate;


if(filingStatus == "Single"){
    //here, use first table to identify the correct value for taxRate;
    if(annualIncome < 12000){
        taxRate = 0.05;
    }
    else if (annualIncome < 25000){
        taxRate = 0.10;
    }
}
else if (filingStatus == "Joint"){
    //here, use second table to identify the correct value for taxRate;
    
}
else{
    console.log("ERROR!  Invalid filingStatus!");
}



// "use strict";

// let taxRate;
// let income = 1000;
// let filingStatus = "joint" + "single";

// if (filingStatus = "joint");
// {
//     if(income < 12000) {

//         taxRate = 0.05;
//     }
//     else if (income >= 12000) {

//         taxRate = 0.10;
//     }
//     // else (income > 75000){
//     //     taxRate = 0.20;
//     // }
// }
// else if (filingStatus = "simgle")
// {
//     if (income < 12000) {
//         taxRate = 0.10;
//     }
//     else if (income >= 25000) {
//         taxRate = 0.15;
//     } 
//     else (income > 75000)
//     {
//         taxRate = 0.25;
//     }
// }

// else (income > 75000) 
// {
//     taxRate = 0.20;
// }
// }
// else if (income >= 25000)
// {
//     taxRate = 0.15;

// let incomeTaxPaid = income * taxRate;

// console.log(taxRate);
// console.log(incomeTaxPaid);