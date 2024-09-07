
        // Task 1
let billTotal = 175; // this is an example total
  
let tip = (billTotal >=  50 && billTotal <= 300) ? billTotal * .15 : billTotal * .20;
    // translates to: if bill total btwen 50&300 inclusive, the tip is 15%, otherwise 20%

        // Task 2 
console.log (`The bill was $${billTotal}, the tip was $${tip}, and the grand total is $${billTotal + tip}`);

        // Task 3
function calculateTip (billTotal) {
        return (billTotal >=  50 && billTotal <= 300) ? billTotal * .15 : billTotal * .20;
}

let testBill = 100;
let testTip = (calculateTip)(testBill);
console.log (`The bill was $${testBill}, the tip was $${testTip}, and the total value is $${testBill + testTip}`);

       // Task 4
// array of test data
let bills = [275, 40, 430, 125, 555, 44 ];
// using map because the function will correspond to every element in the array
const tips = bills.map(bill => calculateTip(bill));
//sum each bill with respective tip
let totals = bills.map((bill, index) => bill + tips[index])

console.log("Bills:",bills);
console.log("Tips:", tips);
console.log("Totals:",totals)