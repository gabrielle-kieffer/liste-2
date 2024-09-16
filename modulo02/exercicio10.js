const vendas = [
    { produto: 'Camiseta', quantidade: 10, valor: 20.00 },
    { produto: 'Calça', quantidade: 5, valor: 50.00 },
    { produto: 'Tênis', quantidade: 3, valor: 100.00 },
    { produto: 'Jaqueta', quantidade: 2, valor: 150.00 }
  ];

  let valorTotalVendas = 0;
  
  vendas.forEach(venda => {
    const totalVenda = venda.quantidade * venda.valor;
    valorTotalVendas += totalVenda;
  });
  
  console.log(`Valor total de vendas: R$ ${valorTotalVendas.toFixed(2)}`);