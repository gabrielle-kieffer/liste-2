const prompt = require('prompt-sync')();


function classifiesAge(age) {
    if (isNaN(age) || age < 0) {
        console.log('Por favor, informe uma idade válida.');
    } else if (age <= 12) {
        console.log('Criança');
    } else if (age <= 17) {
        console.log('Adolescente');
    } else if (age <= 64) {
        console.log('Adulto');
    } else {
        console.log('Idoso');
    }
}

let age = parseInt(prompt('Informe a idade: '), 10);

classifiesAge(age);
