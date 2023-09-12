const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9)
  return Number.isInteger(celsius) ? celsius : +celsius.toFixed(1)
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32
  return Number.isInteger(fahrenheit) ? fahrenheit : +fahrenheit.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
