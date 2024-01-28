/***
** Task-6
** Ticket Fare Calculator
*/
let age = 65;
let statuss = 'student';
let ticketFair = 800;
let ticketPrice;
if(age < 10){
    ticketPrice = "Free"; 
}
else if (statuss === 'student'){
    ticketPrice = (ticketFair * 50) / 100;
}
else if(age >= 60){
    ticketPrice = (ticketFair * 15) / 100;
}
else{
    ticketPrice = ticketFair;
}
console.log(ticketPrice);