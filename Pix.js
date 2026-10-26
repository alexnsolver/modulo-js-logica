const prompt = require("prompt-sync")();

let saldo = Number(prompt("Quanto de saldo tem na conta? "));
let valor = Number(prompt("Qual o valor do pix? "));
let horas = Number(prompt("Que horas? "));
    let limite = 5000;

if (horas >= 20 || horas <= 6){
     limite = 1000
}

if (saldo >= valor && valor <= limite) {
    saldo = saldo - valor
    console.log("Pix Enviado! ", saldo)

} else {

    console.log("Pix BLOQUEADO! MOtivo: acesse o app. Saldo sem alteração \n(atual) ", + saldo);
}
