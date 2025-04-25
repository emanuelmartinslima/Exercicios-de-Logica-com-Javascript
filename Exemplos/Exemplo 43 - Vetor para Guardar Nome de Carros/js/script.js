let carros = ['Porsche', 'Subaru', 'Skyline', 'Chevette Tubarão', 'Monza Tubarão'];

let texto = '';

carros.push('Toyota');

for(let contador = 0; contador < carros.length; contador++){
    console.log(carros[contador]);

    texto = texto + `${carros[contador]}<br>`;
}

document.getElementById('carros').innerHTML = `${texto}`;