function calcularMultiplicacao(numero1, numero2){
    return numero1 * numero2;
}

let resultado = calcularMultiplicacao(4, 3);

document.getElementById('resultado').innerHTML = `O resultado da multiplicação é: <b>${resultado}</b>`;