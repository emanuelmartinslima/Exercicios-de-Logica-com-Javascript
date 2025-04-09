alert('Verificação de Aprovação de Aluno');

let nota1 = parseFloat(prompt('Digite a primeira nota do aluno: '));
let nota2 = parseFloat(prompt('Digite a segunda nota do aluno: '));

let mediaAritmetica = (nota1 + nota2) / 2;

let aprovacao;

if (mediaAritmetica >= 6){
    aprovacao = 'Aprovado';
} else {
    aprovacao = 'Reprovado';
}

alert(`Média do Aluno: ${mediaAritmetica.toFixed(2)}\nSituação do Aluno: ${aprovacao}`);

