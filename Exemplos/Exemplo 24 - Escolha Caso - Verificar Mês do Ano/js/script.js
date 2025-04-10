alert('Verificação do Mês do Ano');

let numero = parseInt(prompt('Digite um número de 1 a 12, iremos mostrar o mês correspondente: '));

let mes;
switch(numero){
    case 1:
        mes = 'janeiro';
        mostrarMes();
        break;
    case 2:
        mes = 'fevereiro';
        mostrarMes();
        break;
    case 3:
        mes = 'março';
        mostrarMes();
        break;
    case 4:
        mes = 'abril';
        mostrarMes();
        break;
    case 5:
        mes = 'maio';
        mostrarMes();
        break;
    case 6:
        mes = 'junho';
        mostrarMes();
        break;
    case 7:
        mes = 'julho';
        mostrarMes();
        break;
    case 8:
        mes = 'agosto';
        mostrarMes();
        break;
    case 9:
        mes = 'setembro';
        mostrarMes();
        break;
    case 10:
        mes = 'outubro';
        mostrarMes();
        break;
    case 11:
        mes = 'novembro';
        mostrarMes();
        break;
    case 12:
        mes = 'dezembro';
        mostrarMes();
        break;
    default:
        alert('Número inválido!');
        break;
}

function mostrarMes(){
    alert(`O mês correspondente para o número ${numero} é ${mes}!`);
}