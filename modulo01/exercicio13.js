const prompt = require('prompt-sync')();

let sum = 0;
let count = 0;

while (true) {
    let number = parseFloat(prompt('Digite um número decimal (ou 0 para sair): '));

    if (number === 0) {
        break;
    }

    sum += number;
    count++;
}

if (count > 0) {
    let average = sum / count;
    console.log(`A média aritmética dos números digitados é: ${average}`);
} else {
    console.log('Nenhum número válido foi digitado.');
}
