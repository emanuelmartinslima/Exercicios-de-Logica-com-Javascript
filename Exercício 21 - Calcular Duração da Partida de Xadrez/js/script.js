alert('Cálculo da Duração da Partida de Xadrez');

let horaInicial = parseInt(prompt('Digite a hora inicial da partida: '));
let horaFinal = parseInt(prompt('Digite a hora final da partida: '));

let duracao;

if(horaInicial < horaFinal){
    duracao = horaFinal - horaInicial;
} else {
    duracao = horaFinal - horaInicial + 24;
}

alert(`Hora Inicial da Partida: ${horaInicial}h\nhora Final da Partida: ${horaFinal}h\nDuração da Partida: ${duracao}h`);