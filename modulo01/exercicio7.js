const prompt = require('prompt-sync')();

function calculateTotal(apples) {
    let pricePerApple;
    if (apples < 12) {
        pricePerApple = 0.30;
    } else {
        pricePerApple = 0.25;
    }

    return apples * pricePerApple;
}


let apples = parseInt(prompt('Informe o número de maçãs compradas: '), 10);
if (isNaN(apples) || apples < 0) {
    console.log('Por favor, informe um número válido de maçãs.');
} else {
    let totalValue = calculateTotal(apples);
    console.log(`O valor total da compra é R$ ${totalValue.toFixed(2)}`);
}
