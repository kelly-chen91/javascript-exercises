const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(sum_list) {
	var sum = 0;
  sum_list.forEach((elmt) => sum += elmt);
  return sum;
};

const multiply = function(product_list) {
  var product = 1;
  if(product_list.length == 0) product = 0;
  else product_list.forEach((elmt) => product *= elmt);
  return product;
};

const power = function(base, power) {
	return Math.pow(base, power);
};

const factorial = function(num) {
	if(num == 0) return 1;
  return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
