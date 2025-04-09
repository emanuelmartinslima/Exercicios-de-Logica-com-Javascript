alert('Cálculo de Salário com Hora Extra');

let horasTrabalhadasMensal = parseInt(prompt('Digite as horas totais mensais trabalhadas: '));
let salarioPorHora = parseInt(prompt('Digite o salário recebido por hora: R$'));

let horasExtras = 0;

if(horasTrabalhadasMensal > 160) {
    horasExtras = horasTrabalhadasMensal - 160;
}

let salarioFinal = ((horasTrabalhadasMensal - horasExtras) * salarioPorHora) + (horasExtras * salarioPorHora * 1.5);

alert(`Horas Trabalhadas Mensais: ${horasTrabalhadasMensal}h\nSalário Por Hora: R$ ${salarioPorHora.toFixed(2)}\nHoras Extras Trabalhadas: ${horasExtras}h\nSalário Final: R$ ${salarioFinal.toFixed(2)}`);