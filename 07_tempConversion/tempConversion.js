const convertToCelsius = function(num) {
    let fahrenheit = ((num - 32) * 5) / 9;
    return rounded(fahrenheit);
};

const convertToFahrenheit = function(num) {
    let celsius = (num * (9 / 5)) + 32;
    return rounded(celsius);
};

function rounded(num) {
    return Number.parseFloat(num.toFixed(1));
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
