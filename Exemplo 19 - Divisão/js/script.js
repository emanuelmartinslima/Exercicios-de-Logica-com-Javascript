alert('Divisão');

let numero1 = parseInt(prompt('Digite um primeiro número: '));
let numero2 = parseInt(prompt('Digite um segundo número: '));
let resultado;

if(numero2 > 0){
    resultado = numero1 / numero2;
}

alert(`O resultado da divisão de ${numero1} e ${numero2} é igual a ${resultado}`);