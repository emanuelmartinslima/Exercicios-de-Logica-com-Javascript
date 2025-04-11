alert('Escolha Caso - True')

let idade = parseInt(prompt('Digite o valor de um número: '));

switch(true){
    case (idade < 16):
        alert('Não pode votar!');
        break;
    case (idade < 18):
        alert('Voto opcional!');
        break;
    case (idade >= 18):
        alert('Pode votar!');
        break;
    default:
        alert('Idade inválida!');
        break;
}