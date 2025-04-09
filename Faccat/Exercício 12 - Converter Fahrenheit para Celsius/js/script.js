alert('Conversor de Fahrenheit para Celsius');

let fahrenheit = parseFloat(prompt('Digite a temperatura (em °F): '));
let celsius = (fahrenheit - 32) * (5/9);

alert(`Temperaturas:\nFahrenheit: ${fahrenheit.toFixed(2)}°F\nCelsius: ${celsius.toFixed(2)}°C`);