const convertToCelsius = function(num) {
    let fahrenheit = ((num - 32) * 5) / 9;
    return rounded(fahrenheit);
};

const convertToFahrenheit = function(num) {
    let celsius = (num * (9 / 5)) + 32;
    return rounded(celsius);
};

function rounded(num) {
    return Math.round((num * 10) / 10);
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
