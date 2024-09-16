const salarioReferencia = 6000;

for (const funcionario of funcionarios) {
  if (funcionario.salario > salarioReferencia) {
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Cargo: ${funcionario.cargo}`);
    console.log(`Salário: R$ ${funcionario.salario}`);
    console.log('--------------------------');
  }
}