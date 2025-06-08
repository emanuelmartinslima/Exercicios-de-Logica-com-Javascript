alert("Verificação de Vencedor");

let nomeTime1 = prompt("Digite o nome do primeiro time: ");
let numeroGolsTime1 = parseInt(prompt(`Digite o número de gols marcados pelo ${nomeTime1}: `));

let nomeTime2 = prompt("Digite o nome do segundo time: ");
let numeroGolsTime2 = parseInt(prompt(`Digite o número de gols marcados pelo ${nomeTime2}: `));

let situacaoJogo = "";

if(numeroGolsTime1 > numeroGolsTime2){
    situacaoJogo = `Vencedor: ${nomeTime1}`;
} else if(numeroGolsTime2 > numeroGolsTime1){
    situacaoJogo = `Vencedor: ${nomeTime2}`;
} else {
    situacaoJogo = "EMPATE";
}

alert(`Time: ${nomeTime1}\nGols Marcados: ${numeroGolsTime1}\n\nTime: ${nomeTime2}\nGols Marcados: ${numeroGolsTime2}\n\nResultado: ${situacaoJogo}`);