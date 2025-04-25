function calcularSubtracao(numero1, numero2){
    return numero1 - numero2;
}

let resultado = calcularSubtracao(4, 1);

document.getElementById('resultado').innerHTML = `O resultado da subtração é: <b>${resultado}</b>`;