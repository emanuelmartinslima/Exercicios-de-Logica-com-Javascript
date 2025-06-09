alert("Verificação de Conceito de Aluno");

let nota1 = parseFloat(prompt("Digite o valor da primeira nota do aluno: "));
let nota2 = parseFloat(prompt("Digite o valor da segunda nota do aluno: "));
let nota3 = parseFloat(prompt("Digite o valor da terceira nota do aluno: "));
let mediaExercicios = parseFloat(prompt("Digite o valor da nota da média de exercícios do aluno: "));

let conceito;

let mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7;

if(mediaAproveitamento  >= 9){
    conceito = "A";
} else if((mediaAproveitamento >= 7.5) && (mediaAproveitamento < 9)){
    conceito = "B";
} else if((mediaAproveitamento >= 6) && (mediaAproveitamento < 7.5)){
    conceito = "C";
} else {
    conceito = "D";
}

alert(`Nota 1: ${nota1.toFixed(2)}\nNota 2: ${nota2.toFixed(2)}\nNota 3: ${nota3.toFixed(2)}\nMédia de Exercícios: ${mediaExercicios.toFixed(2)}\nMédia de Aproveitamento: ${mediaAproveitamento.toFixed(2)}\nConceito do Aluno: ${conceito}`);