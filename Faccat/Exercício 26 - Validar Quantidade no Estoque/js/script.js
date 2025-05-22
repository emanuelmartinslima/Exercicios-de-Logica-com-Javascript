alert('Validação de Quantidade no Estoque');

let quantidadeAtual = parseInt(prompt('Digite a quantidade do produto no estoque: '));

let quantidadeMaxima = parseInt(prompt('Digite a quantidade máxima em estoque: '));

let quantidadeMinima = parseInt(prompt('Digite a quantidade máxima em estoque: '));

let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

let mensagem = '';

if(quantidadeAtual >= quantidadeMedia){
    mensagem = 'Não efetuar compra';
} else {
    mensagem = 'Efetuar compra';
}

alert(mensagem);