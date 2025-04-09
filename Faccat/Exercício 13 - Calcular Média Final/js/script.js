alert('Cálculo da Média Final');

let nota1 = parseFloat(prompt('Digite o valor da primeira nota: '));
let nota2 = parseFloat(prompt('Digite o valor da segunda nota: '));
let nota3 = parseFloat(prompt('Digite o valor da terceira nota: '));

let mediaFinal = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10;

alert(`Nota 1: ${nota1.toFixed(2)}\nNota 2: ${nota2.toFixed(2)}\nNota 3: ${nota3.toFixed(2)}\nMédia Final: ${mediaFinal.toFixed(2)}`);