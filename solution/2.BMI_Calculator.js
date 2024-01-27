/**************************************
** Task-2
** BMI Calculator and Health Category
*/
let weightKG = 58;
let heightInche = 61;
let heightMetre = heightInche * 0.025;
let BMI = weightKG / Math.pow(heightMetre, 2);
let result;
if(BMI < 18.5) {
    result = "You are UNDER-WEIGHT";
}
else {
    if(BMI >= 18.5 && BMI <= 24.9){
        result = "YOU are NORMAL";
    }
    else {
        if(BMI >= 25 && BMI <= 29.9){
            result = "you are OVER-WEIGHT";
        }
        else {
            result = "YOu are OBESE!"
        }
    }
}
console.log(result);