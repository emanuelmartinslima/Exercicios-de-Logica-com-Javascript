alert('Cálculo de Salário com Comissão');

let salarioFixo = parseFloat(prompt('Digite o valor do salário fixo do funcionário: R$'));
let carrosVendidos = parseInt(prompt('Digite o número de carros vendidos pelo funcionário: '));
let valorPorCarro = parseFloat(prompt('Digite o valor de comissão por carro vendido pelo funcionário: R$'));
let valorTotalVendas = parseFloat(prompt('Digite o valor total das vendas efetuadas pelo funcionário: R$'));

let salarioFinal = (salarioFixo) + (carrosVendidos * valorPorCarro) + (valorTotalVendas * 0.05);

alert(`Salário Fixo: R$ ${salarioFixo.toFixed(2)}\nCarros Vendidos: ${carrosVendidos}\nComissão por Carro: R$ ${valorPorCarro.toFixed(2)}\nValor Total das Vendas do Funcionário: R$ ${valorTotalVendas.toFixed(2)}\nSalário Final: R$ ${salarioFinal.toFixed(2)}`);
