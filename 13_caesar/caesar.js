const caesar = function(string, shift) {
   return string.split("")
         .map((char) => {
            char = char.charCodeAt();
            if((char >= 65 && char <= 90) || (char >= 97 && char <= 122)){
                  let char_set = char < 97 ? 65 : 97;
                  return String.fromCharCode(mod(char + shift - char_set, 26) + char_set);
            }
            return String.fromCharCode(char);
         }).join("");
};

const mod = (n, m) => ((n % m) + m) % m;


// Do not edit below this line
module.exports = caesar;
