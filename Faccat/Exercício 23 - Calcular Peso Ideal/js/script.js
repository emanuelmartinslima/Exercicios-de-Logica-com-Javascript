alert('Cálculo de Peso Ideal');

let nome = prompt('Digite o nome da pessoa: ');
let sexo = prompt('Digite o sexo da pessoa:\nM - masculino\nF - feminino').charAt(0).toLowerCase();
let altura = parseFloat(prompt('Digite o valor da altura da pessoa (em metros): '));

let pesoIdeal;

if(sexo == 'm'){
    pesoIdeal = (72.7 * altura) - 58; 
    mostrarPesoIdeal();   
} else if(sexo == 'f'){
    pesoIdeal = (62.1 * altura) - 44.7;
    mostrarPesoIdeal();
} else {
    alert('Sexo Inválido!');
}

function mostrarPesoIdeal(){
    alert(`Nome: ${nome}\nSexo: ${sexo == 'm'? 'masculino' : sexo == 'f'? 'feminino' : 'sexo inválido'}\nAltura: ${altura.toFixed(2)}m\nPeso Ideal: ${pesoIdeal.toFixed(2)} Kg`);
}

