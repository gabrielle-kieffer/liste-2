const filmes = [
    { titulo: 'Inception', diretor: 'Christopher Nolan', anoLancamento: 2010 },
    { titulo: 'The Matrix', diretor: 'Wachowski Sisters', anoLancamento: 1999 },
    { titulo: 'Interstellar', diretor: 'Christopher Nolan', anoLancamento: 2014 },
    { titulo: 'The Shawshank Redemption', diretor: 'Frank Darabont', anoLancamento: 1994 }
  ];
  

  const titulosFilmes = [];
  

  filmes.forEach(filme => {
    titulosFilmes.push(filme.titulo);
  });
  
  console.log(titulosFilmes);