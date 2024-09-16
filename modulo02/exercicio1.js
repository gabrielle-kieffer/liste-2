const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    cor: 'Preto'
  };

  for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
  }

