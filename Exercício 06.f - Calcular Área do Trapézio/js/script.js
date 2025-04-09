alert('Cálculo da Área do Trapézio');

let altura = parseFloat(prompt('Digite o valor da altura do trapézio (em metros): '));
let baseMaior = parseFloat(prompt('Digite o valor da base maior do trapézio (em metros): '));
let baseMenor = parseFloat(prompt('Digite o valor da base menor do trapézio (em metros): '));

let area = (baseMaior + baseMenor) * altura / 2

alert(`Altura: ${altura} m\nBase Maior: ${baseMaior} m\nBase Menor: ${baseMenor} m\nÁrea do Trapézio: ${area} m²`);