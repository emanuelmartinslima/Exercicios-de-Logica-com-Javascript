let valores = [];

valores[0] = parseInt(prompt('Digite o primeiro valor: '));
valores[1] = parseInt(prompt('Digite o segundo valor: '));
valores[2] = valores[0] + valores[1];

let texto = '';

for (let contador = 0; contador < valores.length; contador++) {
    texto = texto + `${valores[contador]}<br>`;
}

document.getElementById('texto').innerHTML = `O resultado da soma de ${valores[0]} e ${valores[1]} é ${valores[2]}`;