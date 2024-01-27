/***
** Task-4
** nested friend
*/
let score = 60;
let message;
if(score > 80) {
    message = "Go for a lunch";
}
else{
    if(score < 80 && score >= 60){
        message = "Good luck next time";
    }
    else{
        if(score < 60 && score >= 40) {
            message = "Keep your friend's message unseen";
        }
        else {
            if(score < 40){
                message = "Block your friend";
            }
        }
    }
}
console.log(message);