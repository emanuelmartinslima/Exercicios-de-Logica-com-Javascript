alert("Cálculo de Custo Total de Produto com Desconto");

let nomeProduto = prompt("Digite a descrição (nome) do produto: ");
let quantidadeProduto = parseInt(prompt("Digite a quantidade comprada do produto: "));
let precoUnitario = parseFloat(prompt("Digite o valor do preço unitário do produto: R$ "));

let desconto, custoTotal;

if(quantidadeProduto <= 5){
    desconto = 0.02;
} else if((quantidadeProduto > 5) && (quantidadeProduto <= 10)){
    desconto = 0.03;
} else if(quantidadeProduto > 10){
    desconto = 0.05;
}

custoTotal = quantidadeProduto * precoUnitario * (1 - desconto);

alert(`Nome do Produto: ${nomeProduto}\nQuantidade Comprada: ${quantidadeProduto}\nPreço Unitário: R$ ${precoUnitario.toFixed(2)}\nDesconto Aplicado: ${(desconto * 100).toFixed(2)}%\nTotal a Pagar: R$ ${custoTotal.toFixed(2)}`);