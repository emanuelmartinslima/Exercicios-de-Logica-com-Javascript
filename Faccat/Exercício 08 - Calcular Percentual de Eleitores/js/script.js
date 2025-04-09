alert('Cálculo do Percentual de Eleitores');

let numeroTotalEleitores = parseInt(prompt('Digite o número total de eleitores: '));
let numeroVotosNulos = parseInt(prompt('Digite o número de votos nulos: '));
let numeroVotosBrancos = parseInt(prompt('Digite o número de votos brancos: '));
let numeroVotosValidos = numeroTotalEleitores - (numeroVotosNulos + numeroVotosBrancos);

let percentualVotosNulos = numeroVotosNulos * 100 / numeroTotalEleitores;
let percentualVotosBrancos = numeroVotosBrancos * 100 / numeroTotalEleitores;
let percentualVotosValidos = numeroVotosValidos * 100 / numeroTotalEleitores;

alert(`Número Total de Eleitores: ${numeroTotalEleitores}\nNúmero Votos Nulos: ${numeroVotosNulos}\nNúmero Votos Brancos: ${numeroVotosBrancos}\nNúmero Votos Válidos: ${numeroVotosValidos}\nPercentual de Votos Nulos: ${percentualVotosNulos.toFixed(2)}%\nPercentual Votos Brancos: ${percentualVotosBrancos.toFixed(2)}%\nPercentual Votos Válidos: ${percentualVotosValidos.toFixed(2)}%`);