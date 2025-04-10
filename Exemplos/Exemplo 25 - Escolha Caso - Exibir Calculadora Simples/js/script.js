alert('Calculadora Simples');

let numero1 = parseFloat(prompt('Digite um primeiro número: '));
let operacao = prompt('Insira a operação com um dos símbolos abaixo:\n+ : adição\n- : subtração\n* : multiplicação\n/ : divisão');
let numero2 = parseFloat(prompt('Digite um segundo número: '));

let resultado;

switch(operacao){
    case '+':
        soma();
        break;
    case '-':
        subtracao();
        break;
    case '*':
        multiplicacao();
        break;
    case '/':
        divisao();
        break;
    default:
        alert('Operação inválida!');
        break;
}

function soma(){
    resultado = numero1 + numero2;
    mostrarResultado();
}

function subtracao(){
    resultado = numero1 - numero2;
    mostrarResultado();
}

function multiplicacao(){
    resultado = numero1 * numero2;
    mostrarResultado();
}

function divisao(){
    if(numero2 != 0){
        resultado = numero1 / numero2;
        mostrarResultado();
    } else {
        alert('Não é possível fazer divisão com o denominador sendo 0!');
    }   
}

function mostrarResultado(){
    alert(`O resultado da operação ${numero1} ${operacao} ${numero2} é ${resultado.toFixed(2)}!`);
}