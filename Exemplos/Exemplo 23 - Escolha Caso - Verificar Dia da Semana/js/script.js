alert('Verificação de Dia da Semana');

let numero = parseInt(prompt('Digite um número entre 1 e  7, vamos exibir um dia da semana correspondente: '));

let diaSemana;

switch(numero){
    case 1:
        diaSemana = 'domingo';
        mostrarDiaSemana();
        break;
    case 2:
        diaSemana = 'segunda';
        mostrarDiaSemana();
        break;
    case 3:
        diaSemana = 'terça';
        mostrarDiaSemana();
        break;
    case 4:
        diaSemana = 'quarta';
        mostrarDiaSemana();
        break;
    case 5:
        diaSemana = 'quinta';
        mostrarDiaSemana();
        break;
    case 6:
        diaSemana = 'sexta';
        mostrarDiaSemana();
        break;
    case 7:
        diaSemana = 'sábado';
        mostrarDiaSemana();
        break;
    default:
        alert('Número inválido!');
}

function mostrarDiaSemana(){
    alert(`O dia da semana do número ${numero} é ${diaSemana}`);
}
