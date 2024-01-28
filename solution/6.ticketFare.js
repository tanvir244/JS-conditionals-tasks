/***
** Task-6
** Ticket Fare Calculator
*/
let student = true;
let age = 65;
let ticketFair = 800;
let ticketPrice;
if(age < 10){
    ticketPrice = "Free"; 
}
else if (student){
    ticketPrice = (ticketFair * 50) / 100;
}
else if(age >= 60){
    ticketPrice = (ticketFair * 15) / 100;
}
else{
    ticketPrice = ticketFair;
}
console.log(ticketPrice);

// ternary operator
(age < 10) ? console.log("Free")
    : (student) ? console.log("50% discount")
    : (age >= 60) ? console.log("15% discount")
    : console.log("No discount!")
