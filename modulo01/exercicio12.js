const prompt = require('prompt-sync')();

let number = parseInt(prompt('Digite um número para ver a tabuada do mesmo: '), 10);

console.log(`Tabuada de ${number}:`);

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}
