// Mostra soma
alert(`Soma`);

// Cria duas variáveis que vão receber um prompt que vai mostrar uma saída e receber um entrada de dados
let numero1 = prompt(`Digite um primeiro número: `);
let numero2 = prompt(`Digite um segundo número: `);

// Declara uma variável para somar as entradas recebidas e converte as variáveis para inteiros
let soma = parseInt(numero1) + parseInt(numero2);

// Usa o alert para retornar a soma dos números
alert(`O resultado da soma de ${numero1} e ${numero2} é igual a ${soma}`);