const alunos = [
    { nome: 'João', nota1: 7.5, nota2: 8.0 },
    { nome: 'Maria', nota1: 9.0, nota2: 7.5 },
    { nome: 'Pedro', nota1: 6.0, nota2: 5.5 },
    { nome: 'Ana', nota1: 8.5, nota2: 9.0 }
  ];
  

  for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
  
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log('--------------------------');
  }
