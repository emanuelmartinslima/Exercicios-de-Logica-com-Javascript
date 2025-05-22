alert('Verificação de Número Positivo, Negativo ou Zero');

let numero = parseInt(prompt('Digite o valor de um número inteiro: '));

let mensagem= '';

if(numero > 0){
    mensagem = 'positivo';
} else if(numero < 0){
    mensagem = 'negativo';
} else {
    mensagem = 'zero';
}

alert(`O número ${numero} é ${mensagem}`);