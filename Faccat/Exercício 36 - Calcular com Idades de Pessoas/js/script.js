alert("Cálculo com Idade de Pessoas");

let idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem: "));
let idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem: "));

let idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher: "));
let idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher: "));

let homemMaisVelho, homemMaisNovo, mulherMaisVelha, mulherMaisNova, soma, produto;

if(idadeHomem1 > idadeHomem2){
    homemMaisVelho = idadeHomem1;
    homemMaisNovo = idadeHomem2;
} else {
    homemMaisVelho = idadeHomem2;
    homemMaisNovo = idadeHomem1;
}

if(idadeMulher1 > idadeMulher2){
    mulherMaisVelha = idadeMulher1;
    mulherMaisNova = idadeMulher2;
} else {
    mulherMaisVelha = idadeMulher2;
    mulherMaisNova = idadeMulher1;
}

soma = homemMaisVelho + mulherMaisNova;
produto = homemMaisNovo * mulherMaisVelha;

alert(`Idades:\nHomem Mais Novo: ${homemMaisNovo} anos\nHomem Mais Velho: ${homemMaisVelho} anos\nMulher Mais Nova: ${mulherMaisNova} anos\nMulher Mais Velha: ${mulherMaisVelha} anos\n\nResultados dos Cálculos:\nSoma: ${soma}\nProduto: ${produto}`); 