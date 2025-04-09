alert('Validação Se Pode Votar');

let anoNascimento = parseInt(prompt('Digite o ano de nascimento da pessoa: '));
let anoAtual = parseInt(prompt('Digite o ano atual: '));

let idade = anoAtual - anoNascimento;

if(idade >= 16){
    alert(`A pessoa pode votar!`);
} else {
    alert(`A pessoa não pode votar!`);
}