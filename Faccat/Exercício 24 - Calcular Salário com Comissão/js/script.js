alert('Cálculo de Salário com Comissão');

let vendasTotais = parseFloat(prompt('Digite o valor das vendas efetuadas pelo vendedor: R$ '));

let valorExtra = vendasTotais - 1500;

let salarioFinal;

if(valorExtra > 0){
    salarioFinal = (vendasTotais * 0.03) + (valorExtra * 0.05); 
} else {
    salarioFinal = vendasTotais * 0.03;
}

alert(`Vendas Efetuadas: R$ ${vendasTotais.toFixed(2)}\nSalário Final: R$ ${salarioFinal.toFixed(2)}`);