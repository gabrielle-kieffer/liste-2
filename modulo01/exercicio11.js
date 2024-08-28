const prompt = require('prompt-sync')();

let sumTotal = 0;

for (let i = 0; i < 5; i++) {
    let number = parseFloat(prompt(`Digite o ${i + 1}º número: `));
    sumTotal += number;
}

console.log(`A soma total dos 5 números é: ${sumTotal}`);
