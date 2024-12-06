import * as fatorial from './fatorial';

test('Calcula o fatorial de 5, igual a 120.', () => {
  expect(fatorial.default(5)).toBe(120);
});

test('Calcula o fatorial de 10, igual a 3628800.', () => {
  expect(fatorial.default(10)).toBe(3628800);
});
