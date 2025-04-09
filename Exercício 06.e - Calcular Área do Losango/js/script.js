alert('Cálculo da Área do Losango');

let diagonalMaior = parseFloat(prompt('Digite o valor da diagonal maior do losango (em metros): '));
let diagonalMenor = parseFloat(prompt('Digite o valor da diagonal menor do losango (em metros): '));

let area = (diagonalMaior * diagonalMenor) /  2;

alert(`Diagonal Maior: ${diagonalMaior} m\nDiagonal Menor: ${diagonalMenor} m\nÁrea do Losango: ${area} m²`);