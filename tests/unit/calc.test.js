const calculadora = require("../../models/calculadora.js");

test("somar 2 + 2 deveria ser igual a 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("'banana' deveria retornar 'erro'", () => {
  const resultado = calculadora.somar("banana", 2);
  expect(resultado).toBe("erro");
});

test("'laranja' deveria retornar 'erro'", () => {
  const resultado = calculadora.somar(2, "laranja");
  expect(resultado).toBe("erro");
});

test("NaN deveria retornar 'erro'", () => {
  const resultado = calculadora.somar(2, NaN);
  expect(resultado).toBe("erro");
});
