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
let opcao: number = 0;

do{
    const teclado = require (`prompt-sync`)();

let soma: number = 0; 
let numero1: number = parseFloat(teclado(`Digite o um número:`));
let numero2: number = parseFloat(teclado(`Digite um número: `));

soma = numero1+numero2

console.log(`Seu valor é: ${soma}. `);

console.log(`deseja continuar somando?`);

console.log(`Digite 0 para sair`);
console.log (`Digite 1 para continuar`);

opcao = parseInt(teclado(`Digite sua opção: `));

}while(opcao == 1);

console.log(`Fim de programa`)


