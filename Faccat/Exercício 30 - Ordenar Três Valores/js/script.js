alert("Ordenação de Três Valores");

let numero1 = parseInt(prompt("Digite um valor inteiro: "));
let numero2 = parseInt(prompt("Digite um outro valor inteiro: "));
let numero3 = parseInt(prompt("Digite mais um outro valor inteiro: "));

let primeiroNumero;
let segundoNumero;
let terceiroNumero;

if ((numero1 > numero2) && (numero2 > numero3)){
    primeiroNumero = numero3;
    segundoNumero = numero2;
    terceiroNumero = numero1;
} else if((numero1 > numero3) && (numero3 > numero2)){
    primeiroNumero = numero2;
    segundoNumero = numero3;
    terceiroNumero = numero1;
} else if((numero2 > numero1) && (numero1 > numero3)){
    primeiroNumero = numero3;
    segundoNumero = numero1;
    terceiroNumero = numero2;
} else if((numero2 > numero3) && (numero3 > numero1)){
    primeiroNumero = numero1;
    segundoNumero = numero3;
    terceiroNumero = numero2;
} else if((numero3 > numero1) && (numero1 > numero2)){
    primeiroNumero = numero2;
    segundoNumero = numero1;
    terceiroNumero = numero3;
} else if((numero3 > numero2) && (numero2 > numero1)){
    primeiroNumero = numero1;
    segundoNumero = numero2;
    terceiroNumero = numero3;
}

alert(`Números Ordenados: ${primeiroNumero}, ${segundoNumero}, ${terceiroNumero}`);