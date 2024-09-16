const clientes = [
  { nome: 'Alice', idade: 28, cidade: 'São Paulo' },
  { nome: 'Bob', idade: 35, cidade: 'Rio de Janeiro' },
  { nome: 'Carlos', idade: 42, cidade: 'Belo Horizonte' },
  { nome: 'Diana', idade: 29, cidade: 'Curitiba' },
  { nome: 'Eva', idade: 31, cidade: 'Porto Alegre' }
];


let clientesAcimaDe30 = 0;

clientes.forEach(cliente => {
  if (cliente.idade > 30) {
    clientesAcimaDe30++;
  }
});

console.log(`Número de clientes com mais de 30 anos: ${clientesAcimaDe30}`);