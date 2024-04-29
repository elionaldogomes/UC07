const questoes = require('./questaoV2');

test('Testar a função maior número', () => {
    expect(questoes.ehMaior(7,3,9)).toBe(9);
  });
  test('testar se retornar o maior número com dois igauis', ()=>{
    expect(questoes.ehMaior(2,2,8)).toBe(8);
  })

  test('testar o calculo da idade', ()=>{
    expect(questoes.calcularIdade(1924)).toBe("Você é Idoso");
  })

  test('testar verificar dia', ()=>{
    expect(questoes.verificarDia("quinta")).toBe("Pode estudar você não é herdeiro!");
  })

  test('testar função dia e noite', ()=>{
    expect(questoes.diaNoite(17)).toBe("Dia");
  })