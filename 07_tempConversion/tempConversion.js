const convertToCelsius = function(temp) {
  ///(temp - 32)/ (9.0/5)
  return Math.round(((temp - 32) / (9.0/5)) * 10)/10;
};

const convertToFahrenheit = function(temp) {
  //(9.0/5)*temp + 32
  return Math.round(((9.0/5) * temp + 32) * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
