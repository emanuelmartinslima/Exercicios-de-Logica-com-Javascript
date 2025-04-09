alert('Ordenação de Dois Valores em Ordem Crescente');

let numero1 = parseInt(prompt('Digite o valor de um número: '));
let numero2 = parseInt(prompt('Digite o valor de um outro número: '));

let primeiroNumero;
let segundoNumero;

if(numero1 > numero2){
    primeiroNumero = numero2;
    segundoNumero = numero1;
} else {
    primeiroNumero = numero1;
    segundoNumero = numero2;
}

alert(`Números Ordenados em Ordem Crescente: ${primeiroNumero}, ${segundoNumero}.`)