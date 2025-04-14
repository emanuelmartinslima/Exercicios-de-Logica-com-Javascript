alert("Temporizador com Entrada");

let horasIniciais;
let minutosIniciais;
let segundosIniciais;

do{
    horasIniciais = parseInt(prompt('Digite as horas para se iniciar o temporizador: '));
    
    if(horasIniciais > 23){
        alert('Não é possível digitar horas maiores que 23! Digite de novo!');
    }
} while (horasIniciais > 23);

do{
    minutosIniciais = parseInt(prompt('Digite os minutos para se iniciar o temporizador: '));

    if(minutosIniciais > 59){
        alert('Não é possível digitar minutos maiores que 59! Digite de novo!');
    }
} while (minutosIniciais > 59);

do{
    segundosIniciais = parseInt(prompt('Digite os segundos para se iniciar o temporizador: '));

    if(segundosIniciais > 59){
        alert('Não é possível digitar segundos maiores que 59! Digite de novo!');
    }
} while (segundosIniciais > 59);

for(horasIniciais; horasIniciais >= 0; horasIniciais--){
    for(minutosIniciais; minutosIniciais >= 0; minutosIniciais--){
        for(segundosIniciais; segundosIniciais >= 0; segundosIniciais--){
            console.log(`${horasIniciais} : ${minutosIniciais} : ${segundosIniciais}`);
        }
        segundosIniciais = 59;
    }
    minutosIniciais = 59;
}