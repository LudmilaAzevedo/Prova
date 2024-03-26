/*
Nome 1: Dandara
Nome 2: Ludmila
Nome 3: Pietro
Nome 4: Rafaela
Nome 5: Thávine

5 -O IMC (índice de massa corpórea) indica o grau de obesidade de uma pessoa. 
Este índice é obtido pelo peso (em Kg) dividido pelo quadrado da altura 
(em metros). A tabela a seguir apresenta as faixas deste índice: 
 __________________________________________
|====== IMC ======= |===== Avaliação ===== |
| Menor que 18,5    | Baixo peso           |
| De 18,5 a 24,99   | Normal               |
| De 25 a 29,99     | Sobrepeso            |
| Maior que 30      | Obesidade            |
|___________________|______________________|

(25 pontos)
*/
const teclado = require (`prompt-sync`)();

let altura: number = parseFloat(teclado(`Digite sua altura em metros: `));
let peso: number = parseFloat(teclado(`Digite o seu peso em kg: `));


let alturaQuad: number = (altura*altura);
let iMC: number = peso / alturaQuad

if (iMC < 18.5){
    console.log(`Baixo peso`);
} else {
    if (iMC >= 18.5 && iMC <= 24.90){
console.log(`Normal`); }
       } else 
        if (iMC >= 25 && iMC <= 29.99) {
            console.log(`Sobrepeso`);}
        } else {
            if (iMC > 30){
                console.log(`Obesidade`);
            } else {
                console.log (`Algo deu errado!!S`);
            }
}