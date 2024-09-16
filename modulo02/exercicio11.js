const pedidos = [
    { cliente: 'Alice', produto: 'Camiseta', quantidade: 2 },
    { cliente: 'Bob', produto: 'Calça', quantidade: 1 },
    { cliente: 'Alice', produto: 'Tênis', quantidade: 1 },
    { cliente: 'Carlos', produto: 'Jaqueta', quantidade: 2 },
    { cliente: 'Alice', produto: 'Camiseta', quantidade: 1 },
    { cliente: 'Bob', produto: 'Tênis', quantidade: 1 },
  ];
  
  const quantidadePorCliente = {};
  
  pedidos.forEach(pedido => {
    const { cliente, quantidade } = pedido;

    if (quantidadePorCliente[cliente]) {
      quantidadePorCliente[cliente] += quantidade;
    } else {
      quantidadePorCliente[cliente] = quantidade;
    }
  });
  
  console.log(quantidadePorCliente);