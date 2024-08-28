const prompt = require('prompt-sync')();


function calculateIMC(weight, height) {
    return weight / (height * height);
}

function classifiesWeight(imc) {
    if (imc < 18.5) {
        return 'Baixo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Peso adequado';
    } else if (imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
    } else {
        return 'Obesidade';
    }
}

let weight = parseFloat(prompt('Informe seu peso em kg: '));
let height = parseFloat(prompt('Informe sua altura em metros: '));
let imc = calculateIMC(weight, height);

let category = classifiesWeight(imc);
console.log(`Seu IMC é ${imc.toFixed(2)}, a classificação é: ${category}.`);
