import { Forma, Retangulo, Circulo } from './classea';

describe('Testes da classe abstrata Forma', () => {
    test('Deve calcular a área do Retângulo corretamente', () => {
        const retangulo = new Retangulo(10, 20);
        expect(retangulo.calcularArea()).toBe(200);
    });

    test('Deve calcular a área do Círculo corretamente', () => {
        const circulo = new Circulo(7);
        expect(circulo.calcularArea()).toBeCloseTo(153.938, 2);
    });

    test('Comparação de áreas', () => {
        const retangulo = new Retangulo(10, 10); // Área: 100
        const circulo = new Circulo(10);        // Área: ~314.159

        const resultado = Forma.compararAreas(retangulo, circulo);
        expect(resultado).toBe('A segunda forma é maior ou ambas são iguais.');
    });
});
