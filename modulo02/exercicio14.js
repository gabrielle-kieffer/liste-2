const empresa = {
    departamentos: [
      {
        nome: 'Recursos Humanos',
        funcionarios: [
          { nome: 'Ana', cargo: 'Gerente de RH' },
          { nome: 'Pedro', cargo: 'Assistente de RH' }
        ]
      },
      {
        nome: 'Desenvolvimento',
        funcionarios: [
          { nome: 'Lucas', cargo: 'Desenvolvedor Frontend' },
          { nome: 'Maria', cargo: 'Desenvolvedora Backend' }
        ]
      },
      {
        nome: 'Marketing',
        funcionarios: [
          { nome: 'João', cargo: 'Analista de Marketing' },
          { nome: 'Fernanda', cargo: 'Coordenadora de Marketing' }
        ]
      }
    ]
  };
  

  for (const departamento of empresa.departamentos) {
    for (const funcionario of departamento.funcionarios) {
      console.log(`Funcionário: ${funcionario.nome}, Departamento: ${departamento.nome}`);
    }
  }