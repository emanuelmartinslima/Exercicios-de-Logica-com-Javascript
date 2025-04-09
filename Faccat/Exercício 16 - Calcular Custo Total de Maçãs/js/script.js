alert('Cálculo do Custo Total de Maçãs');

let numeroMacas = parseInt(prompt('Digite o número total de maçãs compradas: '));

let precoMaca;

if(numeroMacas < 12){
    precoMaca = 1.30;
} else {
    precoMaca = 1;
}

let custoTotal = precoMaca * numeroMacas;

alert(`Número de Maçãs Totais: ${numeroMacas}\nPreço Individual: R$ ${precoMaca.toFixed(2)}\nCusto Total: R$ ${custoTotal.toFixed(2)}`);

