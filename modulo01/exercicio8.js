const prompt = require('prompt-sync')();

function displayInOrder(a, b) {
    if (a < b) {
        console.log(`Ordem crescente: ${a}, ${b}`);
    } else {
        console.log(`Ordem crescente: ${b}, ${a}`);
    }
}

let valor1 = parseFloat(prompt('Informe o primeiro valor: '));
let valor2 = parseFloat(prompt('Informe o segundo valor: '));


if (valor1 === valor2) {
    console.log('Os valores devem ser diferentes.');
} else {
    displayInOrder(valor1, valor2);
}