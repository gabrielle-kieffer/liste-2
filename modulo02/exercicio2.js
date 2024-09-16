const livro = {
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    anoPublicacao: 1899,
    genero: 'Romance'
  };
  
  let editoraExiste = false;
  
  for (let propriedade in livro) {
    if (propriedade === 'editora') {
      editoraExiste = true;
      break;
    }
  }
  
  if (!editoraExiste) {
    livro.editora = 'Companhia das Letras'; 
  }
  
  console.log(livro);
