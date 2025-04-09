alert('Exemplo - Estrutura de Decisão Encadeada');

let numero = parseFloat(prompt('Digite o valor de um número: '));

if(numero < 10){
    alert(`O número ${numero} é menor que 10.`);
} else if(numero > 10){
    alert(`O número ${numero} é maior que 10.`);
} else {
    alert(`O número ${numero} é igual a 10.`);
}