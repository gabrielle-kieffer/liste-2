const estoque = [
    { produto: 'Camiseta', quantidade: 10, minimo: 15 },
    { produto: 'Calça', quantidade: 5, minimo: 10 },
    { produto: 'Tênis', quantidade: 20, minimo: 15 },
    { produto: 'Jaqueta', quantidade: 8, minimo: 8 }
  ];
  
  estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2;
    }
  });
  
  console.log(estoque);
