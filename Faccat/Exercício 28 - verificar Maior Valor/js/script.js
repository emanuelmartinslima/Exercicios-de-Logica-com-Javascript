alert('Verificação de Maior Valor');

let numero1 = parseInt(prompt('Digite um valor inteiro para o primeiro número: '));

let numero2 = parseInt(prompt('Digite um valor inteiro para o segundo número: '));

let numero3 = parseInt(prompt('Digite um valor inteiro para o terceiro número: '));

let maiorNumero;

if ((numero1 > numero2) && (numero1 > numero3)){
    maiorNumero = numero1;
} else if ((numero2 > numero1) && (numero2 > numero3)){
    maiorNumero = numero2;
} else if ((numero3 > numero1) && (numero3 > numero2)){
    maiorNumero = numero3;
}

alert(`O maior número é ${maiorNumero}`);