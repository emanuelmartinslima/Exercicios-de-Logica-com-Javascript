function calcularSoma(numero1, numero2){
    return numero1 + numero2;
}

let resultado = calcularSoma(4, 3);

document.getElementById('resultado').innerHTML = `O resultado da soma é: <b>${resultado}</b>`;