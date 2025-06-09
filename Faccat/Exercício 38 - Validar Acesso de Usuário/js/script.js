alert("Validação de Acesso de Usuário");

let codigoArmazenado = "1234", senhaArmazenada = "9999";

let codigoInformado = prompt("Digite o código do usuário: ");

if(codigoInformado == codigoArmazenado){
    let senhaInformada = prompt("Digite a senha do usuário: ");

    if(senhaInformada == senhaArmazenada){
        alert("Acesso Permitido!");
    } else {
        alert("Senha Incorreta!");
    }
} else {
    alert("Usuário inválido!");
}