let fahrenheit = parseFloat(prompt('Digite o valor do grau em Fahrenheit: '));

function converterFahrenheitParaCelsius(fahrenheit){
    return (fahrenheit - 32) * (5 / 9);
}

let celsius = converterFahrenheitParaCelsius(fahrenheit).toFixed(2);

alert(`Fahrenheit: ${fahrenheit}°F\nCelsius: ${celsius}°C`);

document.getElementById('resultado').innerHTML = `Resultados:<br>Fahrenheit: ${fahrenheit}°F<br>Celsius: ${celsius}°C`;