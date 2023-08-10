// You will be given the function input as Fahrenheit. You calculate the temperature and convert it to Celsius and return the output

function fahrenheitToCelsius(fahrenheit) {
  const celsius = (5 / 9) * (fahrenheit - 32);
  const celsiusToFixed = celsius.toFixed(2);
  const celsiusParseFloat = parseFloat(celsiusToFixed);
  return celsiusParseFloat;
}

const celsiusNumber = 11;
const results = fahrenheitToCelsius(celsiusNumber);
console.log(results);
