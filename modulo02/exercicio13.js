const carrinho = {
    itens: [
      { nome: 'Camiseta', quantidade: 2, precoUnitario: 20.00 },
      { nome: 'Calça', quantidade: 1, precoUnitario: 50.00 },
      { nome: 'Tênis', quantidade: 1, precoUnitario: 100.00 },
      { nome: 'Jaqueta', quantidade: 1, precoUnitario: 150.00 }
    ]
  };
  

  let valorTotalCarrinho = 0;
  
  carrinho.itens.forEach(item => {
    const totalItem = item.quantidade * item.precoUnitario;
    valorTotalCarrinho += totalItem;
  });
  
  console.log(`Valor total do carrinho: R$ ${valorTotalCarrinho.toFixed(2)}`);
