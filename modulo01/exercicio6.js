const prompt = require('prompt-sync')();

function checkTriangle(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            return 'Triângulo equilátero';
        } else if (a === b || a === c || b === c) {
            return 'Triângulo isósceles';
        } else {
            return 'Triângulo escaleno';
        }
    } else {
        return 'Os valores fornecidos não formam um triângulo.';
    }
}


let a = parseFloat(prompt('Informe o lado A: '));
let b = parseFloat(prompt('Informe o lado B: '));
let c = parseFloat(prompt('Informe o lado C: '));


let type = checkTriangle(a, b, c);
console.log(type);