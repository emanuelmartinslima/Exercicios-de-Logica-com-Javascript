alert('Cálculo do Custo Final do Carro');

let custoFabrica = parseFloat(prompt('Digite o valor do custo de fábrica do carro: R$'));

let percentualDistribuidor = 28;
let percentualImposto = 45;

let custoFinal = custoFabrica + (custoFabrica * percentualDistribuidor / 100) + (custoFabrica * percentualImposto / 100);

alert(`Custo de Fábrica do Carro: R$ ${custoFabrica.toFixed(2).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}\nPercentual de Distribuidor: ${percentualDistribuidor.toFixed(2)}%\nPercentual de Imposto: ${percentualImposto.toFixed(2)}%\nCusto Final do Carro: R$ ${custoFinal.toFixed(2).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);