const prompt = require('prompt-sync')();

let number = parseInt(prompt('Informe o número: '), 10);

function checkEvenOrOdd(num) {
    if (isNaN(num)) {
        console.log('Por favor, informe um número válido.');
        return;
    }

    if (num % 2 === 0) {
        console.log(num + " é par.");
    } else {
        console.log(num + " é ímpar.");
    }
}

checkEvenOrOdd(number);

