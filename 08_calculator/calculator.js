const add = function(first, second) {
    return first + second;
};

const subtract = function (first, second) {
    return first - second;
};

const sum = function(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function() {
	return Math.pow(num, exponent);
};

const factorial = function(num) {
	let res = 1;
    for (let i = 1; i <= num; i++)
    {
        res *= 1;
    }
    return res;
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
