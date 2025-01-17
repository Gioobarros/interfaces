import { Carro, Moto } from './classe';

test('Teste do método acelerar da classe Carro', () => {
    const carro = new Carro('Toyota', 100);
    carro.acelerar();
    expect(carro.velocidadeAtual).toBe(110);
});

test('Teste do método acelerar da classe Moto', () => {
    const moto = new Moto('Yamaha', 600);
    const result = moto.acelerar();
    expect(result).toBe('Yamaha com 600cc está acelerando!');
});
