/*
Nome 1: Dandara
Nome 2: Ludmila
Nome 3: Pietro
Nome 4: Rafaela
Nome 5: Thávine

1- Faça um programa que peça um número inteiro e 
determine se ele é par ou ímpar. (10 pontos)
*/

const teclado = require (`prompt-sync`)();
let divisor: number = 2;
let dividendo: number = parseFloat(teclado(`Digite o número:`));
let resto: number = 0;


resto = dividendo % divisor;

if (resto == 0){
    console.log(`Número digitado ${dividendo} é par!!`);
}
else if (resto == 1){
    console.log(`Número digitado ${dividendo} é impar!!`);
}
else {
    console.log(`Algo deu errado!!`);
}