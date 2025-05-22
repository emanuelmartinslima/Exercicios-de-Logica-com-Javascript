alert('Verificação do Tipo de Saldo');

let numeroConta = prompt('Digite o número da conta do cliente: ');
let saldoAnterior = parseFloat(prompt('Digite o valor anterior do saldo do cliente:'));
let debito = parseFloat(prompt('Digite o valor do débito do cliente: '));
let credito = parseFloat(prompt('Digite o valor do crédito do cliente: '));

let saldoAtual = saldoAnterior - debito + credito;

let mensagem = '';
if(saldoAtual >= 0){
    mensagem = 'Saldo Positivo';
} else {
    mensagem = 'Saldo Negativo';
}

alert(`Informações da Conta\nNúmero da Conta: ${numeroConta}\nSaldo Anterior: R$ ${saldoAnterior.toFixed(2)}\nValor Debitado: R$ ${debito.toFixed(2)}\nValor Creditado: R$ ${credito.toFixed(2)}\nSaldo Atual: R$ ${saldoAtual.toFixed(2)}\n${mensagem}`);