
const produtos = [
    { nome: 'Camiseta', preco: 50.00, desconto: 0 },
    { nome: 'Calça', preco: 120.00, desconto: 0 },
    { nome: 'Tênis', preco: 200.00, desconto: 0 },
    { nome: 'Jaqueta', preco: 150.00, desconto: 0 }
  ];
  
  const percentualDesconto = 10;
  
  produtos.forEach(produto => {
    const desconto = produto.preco * (percentualDesconto / 100);
    const novoPreco = produto.preco - desconto;
    
    produto.preco = novoPreco.toFixed(2); 
    produto.desconto = percentualDesconto;
  
    console.log(`Nome: ${produto.nome}`);
    console.log(`Novo Preço: R$ ${produto.preco}`);
    console.log('--------------------------');
  });