const leapYears = function(year) {
    console.log("year % 4 = " + year % 4);
    console.log("year % 100 = " + year % 100);
    console.log("year % 400 = " + year % 400);
    if(year % 4 == 0 && year % 100 !== 0) return true;
    else if((year % 100 === 0) && year % 400 === 0) return true;
    else return false;
        
};

// Do not edit below this line
module.exports = leapYears;
