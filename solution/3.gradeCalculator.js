/***
** Task-3
** Grade Calculator
*/
let score = 85;
let gradeResult;
if(score <= 100 && score >= 90) {
    gradeResult = "A grade";
}
else {
    if(score < 90 && score >= 80){
        gradeResult = "B grade";
    }
    else{
        if(score < 80 && score >= 70){
            gradeResult = "C grade";
        }
        else{
            if(score < 70 && score >= 60){
                gradeResult = "D grade";
            }
            else{
                if(score < 60 && score >= 0){
                    gradeResult = "F grade";
                }
            }
        }
    }
}
console.log(gradeResult);