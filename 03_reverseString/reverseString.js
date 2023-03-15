const reverseString = function(word) {
    let reverse_word = "";
    for(let i = word.length; i > 0; i--){
        reverse_word += word.slice(i-1, i); //isolate substring of the word to add to reverse_word
    }
    return reverse_word;
};

// Do not edit below this line
module.exports = reverseString;
