alert("Soma dos Dois Maiores Valores");

let numero1 = parseInt(prompt("Digite um primeiro valor inteiro: "));
let numero2 = parseInt(prompt("Digite um segundo valor inteiro: "));
let numero3 = parseInt(prompt("Digite um terceiro valor inteiro: "));

let primeiroMaiorNumero;
let segundoMaiorNumero;

if((numero1 > numero2) && (numero2 > numero3)){
    primeiroMaiorNumero = numero1;
    segundoMaiorNumero = numero2;
} else if((numero1 > numero3) && (numero3 > numero2)){
    primeiroMaiorNumero = numero1;
    segundoMaiorNumero = numero3;
} else if((numero2 > numero1) && (numero1 > numero3)){
    primeiroMaiorNumero = numero2;
    segundoMaiorNumero = numero1;
} else if((numero2 > numero3) && (numero3 > numero1)){
    primeiroMaiorNumero = numero2;
    segundoMaiorNumero = numero3;
} else if((numero3 > numero1) && (numero1 > numero2)){
    primeiroMaiorNumero = numero3;
    segundoMaiorNumero = numero1;
} else if((numero3 > numero2) && (numero2 > numero1)){
    primeiroMaiorNumero = numero3;
    segundoMaiorNumero = numero2;
}

let soma = primeiroMaiorNumero + segundoMaiorNumero;

alert(`1° Maior Número: ${primeiroMaiorNumero}\n2° Maior Número: ${segundoMaiorNumero}\nSoma: ${soma}`);
