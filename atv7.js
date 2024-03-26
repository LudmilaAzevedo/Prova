/*
Nome 1: Dandara
Nome 2: Ludmila
Nome 3: Pietro
Nome 4: Rafaela
Nome 5: Thávine

7- Faça um aplicativo que ao pedir dois números efetue a soma,
   e pergunte se ele quer continuar calculando, caso sim volte
   a perguntar os números a ser somados, caso não o aplicativo
   é finalizado.  (10 pontos)
*/
var opcao = 0;
do {
    var teclado = require("prompt-sync")();
    var soma = 0;
    var numero1 = parseFloat(teclado("Digite o um n\u00FAmero:"));
    var numero2 = parseFloat(teclado("Digite um n\u00FAmero: "));
    soma = numero1 + numero2;
    console.log("Seu valor \u00E9: ".concat(soma, ". "));
    console.log("deseja continuar somando?");
    console.log("Digite 0 para sair");
    console.log("Digite 1 para continuar");
    opcao = parseInt(teclado("Digite sua op\u00E7\u00E3o: "));
} while (opcao == 1);
console.log("Fim de programa");
