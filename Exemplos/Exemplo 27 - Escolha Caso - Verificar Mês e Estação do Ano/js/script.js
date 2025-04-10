alert('Verificação de Mês e Estação');

let numero = parseInt(prompt('Digite um número entre 1 e 12, iremos verificar mês e estação correspondentes: '));

let mes;
let estacao;

switch(numero){
    case 1:
        mes = 'janeiro';
        verificarEstacao();
        mostrarAlerta();
        break;
    case 2:
        mes = 'fevereiro';
        verificarEstacao();
        mostrarAlerta();
        break;
    case 3:
        mes = 'março';
        verificarEstacao();
        mostrarAlerta();
        break;
    case 4:
        mes = 'abril';
        verificarEstacao();
        mostrarAlerta();
        break;
    case 5:
        mes = 'maio';
        verificarEstacao();
        mostrarAlerta();
        break;
    case 6:
        mes = 'junho';
        verificarEstacao();
        mostrarAlerta();
        break;
    case 7:
        mes = 'julho';
        verificarEstacao();
        mostrarAlerta();
        break;
    case 8:
        mes = 'agosto';
        verificarEstacao();
        mostrarAlerta();
        break;
    case 9:
        mes = 'setembro';
        verificarEstacao();
        mostrarAlerta();
        break;
    case 10:
        mes = 'outubro';
        verificarEstacao();
        mostrarAlerta();
        break;
    case 11:
        mes = 'novembro';
        verificarEstacao();
        mostrarAlerta();
        break;
    case 12:
        mes = 'dezembro';
        verificarEstacao();
        mostrarAlerta();
        break;
    default:
        alert('Número inválido!');
        break;
}

function verificarEstacao(){
    if(mes == 'janeiro' || mes == 'fevereiro' || mes == 'março'){
        estacao = 'verão';
    } else if(mes == 'abril' || mes == 'maio' || mes == 'junho'){
        estacao = 'outono';
    } else if(mes == 'julho' || mes == 'agosto' || mes == 'setembro'){
        estacao = 'inverno';
    } else {
        estacao = 'primavera';
    }
}

function mostrarAlerta(){
    alert(`Mês: ${mes}\nEstação: ${estacao}`);
}

