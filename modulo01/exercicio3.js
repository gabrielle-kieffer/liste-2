
const prompt = require('prompt-sync')();



function classifyNote(note) {
  if (isNaN(note) || note < 0 || note > 10) {
    console.log('Por favor, informe uma nota válida entre 0 e 10.');
} else if (note >= 6) {
    console.log('Aprovado');
} else if (note === 5) {
    console.log('Recuperação');
} else {
    console.log('Reprovado');
}
}
let note = parseFloat(prompt('Informe a nota (0 a 10): '));

classifyNote(note)