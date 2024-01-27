/***
** Task-5
** Ternary Operator 
*/
let num1 = 230;
let num2 = 250;
let result;
if(num1 > num2){
    result = num1 * 2;
}
else{
    result = num1 + num2;
}
console.log(result);

// Alternative solution using Ternary Operator 
let numberCondition = num1 > num2 ? result = num1 * 2 : result = num1 + num2;
console.log(numberCondition);