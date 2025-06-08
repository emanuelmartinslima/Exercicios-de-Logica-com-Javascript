alert("Validação de Teste de Mesa");

let x, y, z, resposta;

x = parseInt(prompt("Digite o valor de um número inteiro para o X: "));
y = parseInt(prompt("Digite o valor de um número inteiro para o Y: "));

z = (x * y) + 5;

if(z <= 0){
    resposta = "A";
} else if(z <= 100){
    resposta = "B";
} else {
    resposta = "C";
}

alert(`Z: ${z}\nResposta: ${resposta}`);