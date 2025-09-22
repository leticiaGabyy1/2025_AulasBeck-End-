const prompt = require('prompt-sync')();

let nome = prompt('Qual é o seu nome?');
console.log(`Seja-Bem Vindo(a), ${nome}! `);

let anoNasc = prompt('Qual seu ano de nascimento?');
let idade = 2025 - anoNasc;

let fezAniversario = prompt('você ja fez aniversario esse ano?');
if(fezAniversario != 's'){
    idade = idade - 1;
}

console.log(`Você tem ${idade} anos`);