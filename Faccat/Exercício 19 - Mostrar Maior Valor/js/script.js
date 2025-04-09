alert('Mostrar Maior Valor');

let numero1 = parseInt(prompt('Digite um primeiro número: '));
let numero2 = parseInt(prompt('Digite um segundo número: '));

let maiorNumero;

if(numero1 > numero2){
    maiorNumero = numero1;
} else{
    maiorNumero = numero2;
}

alert(`O maior número é ${maiorNumero}!`);