function calcularDivisao(numero1, numero2){
    return numero1 / numero2;
}

let resultado = calcularDivisao(4, 2);

document.getElementById('resultado').innerHTML = `O resultado da divisão é: <b>${resultado}</b>`;