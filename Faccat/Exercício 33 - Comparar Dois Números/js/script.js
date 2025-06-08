alert("Comparação de Dois Números");

let numero1 = parseInt(prompt("Digite um primeiro número: "));
let numero2 = parseInt(prompt("Digite um segundo número: "));

let mensagem;

if(numero1 == numero2){
    mensagem = "Números Iguais";
} else if(numero1 > numero2){
    mensagem = "Primeiro é maior";
} else {
    mensagem = "Segundo é maior";
}

alert(`Primeiro Número: ${numero1}\nSegundo Número: ${numero2}\n\n${mensagem}`);