/*
Nome 1: Dandara
Nome 2: Ludmila
Nome 3: Pietro
Nome 4: Rafaela
Nome 5: Thávine

2 - Escreva um programa que receba três números inteiros
e mostre eles em ordem DECRESCENTE. (10 pontos)
*/
var teclado = require("prompt-sync")();
var nUm = parseFloat(teclado("Digite o primeiro n\u00FAmero: "));
var nDois = parseFloat(teclado("Digite o segundo n\u00FAmero: "));
var nTres = parseFloat(teclado("Digite o terceiro n\u00FAmero: "));
var menor = 0;
var mediano = 0;
var maior = 0;
if (nUm > nDois && nUm > nTres) {
    maior = nUm;
    if (nDois > nTres) {
        mediano = nDois;
        menor = nTres;
    }
    else {
        mediano = nTres;
        menor = nDois;
    }
}
else if (nDois > nUm && nDois > nTres) {
    maior = nDois;
    if (nUm > nTres) {
        mediano = nUm;
        menor = nTres;
    }
    else {
        mediano = nTres;
        menor = nUm;
    }
}
else if (nTres > nUm && nTres > nDois) {
    maior = nTres;
    if (nUm > nDois) {
        mediano = nUm;
        menor = nDois;
    }
    else {
        mediano = nDois;
        menor = nUm;
    }
}
console.log("A ordem decrescente que corresponde a esses n\u00FAmeros \u00E9: ".concat(maior, ", ").concat(mediano, " e ").concat(menor));
