/*
Nome 1: Dandara
Nome 2: Ludmila
Nome 3: Pietro
Nome 4: Rafaela
Nome 5: Thávine

1- Faça um programa que peça um número inteiro e
determine se ele é par ou ímpar. (10 pontos)
*/
var teclado = require("prompt-sync")();
var divisor = 2;
var dividendo = parseFloat(teclado("Digite o n\u00FAmero:"));
var resto = 0;
resto = dividendo % divisor;
if (resto == 0) {
    console.log("N\u00FAmero digitado ".concat(dividendo, " \u00E9 par!!"));
}
else if (resto == 1) {
    console.log("N\u00FAmero digitado ".concat(dividendo, " \u00E9 impar!!"));
}
else {
    console.log("Algo deu errado!!");
}
