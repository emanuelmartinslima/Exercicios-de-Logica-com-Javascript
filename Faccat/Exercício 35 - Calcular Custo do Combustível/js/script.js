alert("Cálculo de Custo do Combustível");

let tipoCombustivel = prompt("Digite o tipo do Combustível: \nA - Álcool\nG - Gasolina").toLowerCase();
let litrosVendidos = parseFloat(prompt("Digite a quantidade de litros comprados: "));

let precoLitro, desconto, custoTotal;

if((tipoCombustivel != "a") && (tipoCombustivel != "g")){
    alert("Tipo de Combustível Inválido!");
} else {
    if(tipoCombustivel == "a"){
        precoLitro = 2.90;
        
        if(litrosVendidos <= 20){
            desconto = 0.03;
        } else {
            desconto = 0.05;
        }

        tipoCombustivel = "Álcool";
    } else {
        precoLitro = 3.30;

        if(litrosVendidos <= 20){
            desconto = 0.04;
        } else {
            desconto = 0.06;
        }

        tipoCombustivel = "Gasolina";
    }

    custoTotal = precoLitro * litrosVendidos * (1 - desconto);

    alert(`Tipo do Combustível: ${tipoCombustivel}\nLitros Vendidos: ${litrosVendidos.toFixed(2)} L\nPreço por Litro: R$ ${precoLitro.toFixed(2)}\nDesconto Aplicado: ${desconto.toFixed(2) * 100}%\nCusto Total: R$ ${custoTotal.toFixed(2)}`);
}
