// Comentário em Linha

/*Comentário em Bloco*/

// Tipos de variáveis
// Var: permite que criemos uma variável com o mesmo nome em seguida, por isso está em desuso
var numero1 = 1;

// Let: é o tipo usado atualmente
let numero2 = 2;

// const: é um espaço de memória que recebe somente um valor, não permitindo que se faça alterações ao longo da execução
const valorPI = 3.1415;

// Mostra o valor da variável do tipo var
alert('Valor da variável do tipo var: ' + numero1);

// Mostra o valor da variável do tipo let
alert('Valor da variável do tipo let: ' + numero2);

// Mostra o valor da constante
alert('Valor de PI: ' + valorPI);

// Declara duas variáveis com let
let numero4 = 10;
let numero5 = 15;

// Declara uma variável que vai guardar o resultado da soma
let soma = numero4 + numero5;

alert(`O resultado da soma de ${numero4} e ${numero5} = ${soma}`);

document.getElementById("resposta").innerText = `O resultado de ${numero4} e ${numero5} = ${soma}`;