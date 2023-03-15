const repeatString = function(word, num_of_times) {
    if(num_of_times < 0) return "ERROR";
    let repeat_word = "";
    for(let i = 0; i < num_of_times; i++){
        repeat_word += word;
    }
    return repeat_word;
};

// Do not edit below this line
module.exports = repeatString;
