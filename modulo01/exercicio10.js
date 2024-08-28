const prompt = require('prompt-sync')();

let number = parseInt(prompt('Informe um número inteiro: '), 10);

if (isNaN(number)) {
    console.log('Por favor, informe um número inteiro válido.');
} else {
    for (let i = 0; i < 10; i++) {
        console.log(number);
    }
}
