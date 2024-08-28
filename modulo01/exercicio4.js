const prompt = require('prompt-sync')();

function exibirMenu() {
    console.log('Menu Interativo:');
    console.log('1. Dizer Olá');
    console.log('2. Perguntar como vai');
    console.log('3. Sair');

    let escolha = parseInt(prompt('Escolha uma opção (1, 2 ou 3): '), 10);

    switch (escolha) {
        case 1:
            console.log('Olá! Como posso ajudar você hoje?');
            break;
        case 2:            
            console.log('Como vão as coisas? Espero que bem!2');
            break;
        case 3:
            console.log('Saindo do menu. Até mais!');
            break;
        default:
            console.log('Opção inválida. Por favor, escolha 1, 2 ou 3.');
            break;
    }
}

exibirMenu()