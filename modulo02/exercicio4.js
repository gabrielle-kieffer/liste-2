const pessoas = [
    { nome: 'Ana', idade: 30, cidade: 'São Paulo' },
    { nome: 'Carlos', idade: 25, cidade: 'Rio de Janeiro' },
    { nome: 'Mariana', idade: 35, cidade: 'Belo Horizonte' },
    { nome: 'Pedro', idade: 28, cidade: 'Porto Alegre' }
  ];
  

  for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade}`);
    console.log(`Cidade: ${pessoa.cidade}`);
    console.log('--------------------------');
  }