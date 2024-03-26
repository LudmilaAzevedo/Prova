/*
Nome 1: Dandara
Nome 2: Ludmila
Nome 3: Pietro
Nome 4: Rafaela
Nome 5: Thávine

4 - Escreva um programa que leia as medidas dos lados de um triângulo e
escreva se ele é Equilátero, isósceles ou Escaleno. Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes.

(10 pontos)
*/
console.clear();
var teclado = require("prompt-sync")();
var lado1 = parseFloat(teclado("Digite o lado: "));
var lado2 = parseFloat(teclado("Digite o lado: "));
var lado3 = parseFloat(teclado("Digite o lado: "));
if (lado1 == lado2 && lado1 == lado3 && lado3 == lado2) {
    console.log("Tri\u00E2ngulo Equil\u00E1tero");
}
else if (lado1 == lado2 || lado1 != lado2 || lado3 == lado1 ||
    lado3 != lado1 || lado2 == lado3 || lado2 != lado3) {
    console.log("Tri\u00E2ngulo Is\u00F3celes");
}
else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
    console.log("Tri\u00E2ngulo Escaleno");
}
