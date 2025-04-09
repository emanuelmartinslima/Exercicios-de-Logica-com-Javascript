alert('Cálculo da Idade em Dias');

let anos = parseInt(prompt('Digite a sua idade: '));
let meses = parseInt(prompt('Digite quantos meses se passaram desde o ínicio do ano: '));
let dias = parseInt(prompt('Digite o dia atual do mês: '));

let diasTotais = (anos * 365) + (meses * 30) + dias

alert(`Anos: ${anos}\nMeses: ${meses}\nDias: ${dias}\nDias Totais: ${diasTotais}`);
