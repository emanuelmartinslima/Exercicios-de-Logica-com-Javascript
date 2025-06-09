alert("Cálculo de Custo Total de Compra");

let quantidadeMaca = parseFloat(prompt("Digite a quantidade de maçãs compradas (em Kg): "));
let quantidadeMorango = parseFloat(prompt("Digite a quantidade de morangos comprados (em Kg): "));

let quantidadeTotal, precoMaca, precoMorango, custoTotal, desconto = 0;

if(quantidadeMaca <= 5){
    precoMaca = 1.80;
} else {
    precoMaca = 1.50;
}

if(quantidadeMorango <= 5){
    precoMorango = 2.50;
} else {
    precoMorango = 2.20;
}

custoTotal = quantidadeMaca * precoMaca + quantidadeMorango * precoMorango;

if((quantidadeTotal > 8) || (custoTotal > 25)){
    desconto = 0.10;
    custoTotal = custoTotal * (1 - desconto);
}

alert(`Quantidades de Frutas Compradas:\nMaçã: ${quantidadeMaca.toFixed(2)} Kg\nMorango: ${quantidadeMorango.toFixed(2)} Kg\n\nPreços por Quilo de Fruta:\nMaçã: R$ ${precoMaca.toFixed(2)}\nMorango: R$ ${precoMorango.toFixed(2)}\n\nDesconto Aplicado: ${desconto.toFixed(2) * 100}%\nCusto Total: R$ ${custoTotal.toFixed(2)}`);