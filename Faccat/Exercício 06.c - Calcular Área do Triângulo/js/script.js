alert('Cálculo da Área do Triângulo');

let altura = parseFloat(prompt('Digite o valor da altura do triãngulo (em metros): '));
let base = parseFloat(prompt('Digite o valor da base do triângulo (em metros): '));

let area = (altura * base) / 2;

alert(`Altura: ${altura} m\nBase: ${base} m\nÁrea do Triângulo: ${area} m²`);