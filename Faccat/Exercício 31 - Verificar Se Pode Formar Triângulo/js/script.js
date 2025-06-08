alert("Verificação de Possibilidade de Triângulo");

let ladoA = parseFloat(prompt("Digite o valor do lado A do triângulo: "));
let ladoB = parseFloat(prompt("Digite o valor do lado B do triângulo: "));
let ladoC = parseFloat(prompt("Digite o valor do lado C do triângulo: "));

let somaAB = ladoA + ladoB;
let somaAC = ladoA + ladoC;
let somaBC = ladoB + ladoC;

let mensagem = "";

if((ladoA < somaBC) && (ladoB < somaAC) && (ladoC < somaAB)){
    mensagem = "É possível formar um triângulo";
} else {
    mensagem = "Não é possível formar um triângulo";
}

alert(`Lado A: ${ladoA}\nLado B: ${ladoB}\nLado C: ${ladoC}\n${mensagem}`);