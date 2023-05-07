const palindromes = function (str) {
    let compare = str.toLowerCase().replaceAll(/[^a-z]/g, "");
    let reversed = compare.split("").reverse().join("");
    console.log(reversed);
    
    return reversed == compare;
};

// Do not edit below this line
module.exports = palindromes;
