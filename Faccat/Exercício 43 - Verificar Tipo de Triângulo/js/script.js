alert("Verificação de Tipo de Triângulo");

let ladoA = parseFloat(prompt("Digite o valor do lado A do triângulo (em cm): "));
let ladoB = parseFloat(prompt("Digite o valor do lado B do triângulo (em cm): "));
let ladoC = parseFloat(prompt("Digite o valor do lado C do triângulo (em cm): "));

let mensagem;

if((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)){
    if((ladoA == ladoB) && (ladoB == ladoC)){
        mensagem = "Tipo: Triângulo Equilátero";
    } else if((ladoA == ladoB) || (ladoB == ladoC) || (ladoA == ladoC)){
        mensagem = "Tipo: Triângulo Isóceles";
    } else {
        mensagem = "Tipo: Triângulo Escaleno";
    }
} else {
    mensagem = "Não é possível formar um triângulo";
}

alert(`Lado A: ${ladoA.toFixed(2)} cm\nLado B: ${ladoB.toFixed(2)} cm\nLado C: ${ladoC.toFixed(2)} cm\n\n${mensagem}`);