let celsius = parseFloat(prompt('Digite o valor da temperatura em Celsius: '));

function converterCelsiusParaFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;
} 

let fahrenheit = converterCelsiusParaFahrenheit(celsius).toFixed(2);

document.getElementById('resultado').innerHTML = `Resultado:<br>Celsius: ${celsius}°C<br>Fahrenheit: ${fahrenheit}°F`;