const transacoes = [
    { tipo: 'entrada', valor: 100.00 },
    { tipo: 'saída', valor: 50.00 },
    { tipo: 'entrada', valor: 200.00 },
    { tipo: 'saída', valor: 30.00 },
    { tipo: 'entrada', valor: 120.00 }
  ];
  
  let saldoFinal = 0;
  
  transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
      saldoFinal += transacao.valor;
    } else if (transacao.tipo === 'saída') {
      saldoFinal -= transacao.valor;
    }
  });
  
  console.log(`Saldo final: R$ ${saldoFinal.toFixed(2)}`);