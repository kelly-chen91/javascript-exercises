const sumAll = function(num1, num2) {
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number') return "ERROR"; //checks the type of the parameter if it is a number
    if(num1 < 0 || num2 < 0) return "ERROR";
    let sum = 0;
    if(num1 > num2){ //goes backwards if num1 is greater than num2
        for(let i = num1; i >= num2; i--){
            sum += i;
        }
    } else { //goes forward if num1 is less than num2
        for(let i = num1; i <= num2; i++){
            sum += i;
        }
    }
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
