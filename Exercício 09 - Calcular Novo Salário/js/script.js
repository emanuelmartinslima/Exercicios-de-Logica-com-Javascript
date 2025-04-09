alert('Cálculo do Novo Salário');

let salarioAntigo = parseFloat(prompt('Digite o valor do salário atual: R$'));
let percentualReajuste = parseFloat(prompt('Digite o percentual de reajuste (em %): '));

let salarioNovo = salarioAntigo * (1 + (percentualReajuste / 100));

alert(`Salário Antigo: ${salarioAntigo.toFixed(2).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}\nPercentual de Reajuste: ${percentualReajuste}%\nSalário Novo: R$ ${salarioNovo.toFixed(2).toLocaleString('pt-bt', {style: 'currency', currency: 'BRL'})}`);