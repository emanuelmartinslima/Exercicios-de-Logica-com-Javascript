alert('Verificação da Estação do Ano');

let numero = parseInt(prompt('Digite um número entre 1 e 4, iremos exibir a estação do ano correspondente: '));

let estacao;

switch(numero){
    case 1:
        estacao = 'primavera';
        mostrarEstacao();
        break;
    case 2:
        estacao = 'verão';
        mostrarEstacao();
        break;
    case 3:
        estacao = 'outono';
        mostrarEstacao();
        break;
    case 4:
        estacao = 'inverno';
        mostrarEstacao();
        break;
    default:
        alert('Número inválido!');
        break;
}

function mostrarEstacao(){
    alert(`A estação correspondente do número ${numero} é ${estacao}!`);
}