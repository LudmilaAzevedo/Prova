/*
Nome 1:Dandara
Nome 2:Ludmila
Nome 3:Pietro
Nome 4:Rafaela
Nome 5:Thávine

3- Faça um programa que pergunte em que turno você estuda.
Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou
"Boa Noite!" ou "Valor Inválido!", conforme o caso. (10 pontos)
*/
var teclado = require("prompt-sync")();
console.log("qual turno voce estuda?");
console.log("digite M para matutino");
console.log("digite V para vesperino");
console.log("digite N para noturno");
var letra = teclado("Digite uma letra:");
if (letra == "M" || letra == "m") {
    console.log("bom dia");
}
if (letra == "V" || letra == "v") {
    console.log("boa tarde");
}
if (letra == "N" || letra == "n") {
    console.log("boa noite");
}
