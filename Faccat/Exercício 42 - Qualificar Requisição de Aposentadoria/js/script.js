alert("Qualificação de Requisição de Aposentadoria");

let codigoEmpregado = prompt("Digite o número do código do empregado: ");
let anoNascimento = parseInt(prompt("Digite o ano de nascimento do funcionário: "));
let anoIngressoEmprego = parseInt(prompt("Digite o ano de ingresso na empresa do empregado: "));

let anoAtual = 2025, idadeEmpregado = 2025 - anoNascimento, tempoExperiencia = 2025 - anoIngressoEmprego, mensagem;

if(((idadeEmpregado >= 65) || (tempoExperiencia >= 30)) || ((idadeEmpregado >= 60) && (tempoExperiencia >= 25))){
    mensagem = "Requerer Aposentadoria";
} else {
    mensagem = "Não Requerer";
}

alert(`Código Empregado: ${codigoEmpregado}\n\nAno de Nascimento: ${anoNascimento}\nIdade do Empregado: ${idadeEmpregado}\n\nAno de Ingresso na Empresa: ${anoIngressoEmprego}\nTempo de Experiência:${tempoExperiencia}\n\nAno Atual: ${anoAtual}\n\nSituação da Requisição: ${mensagem}`);