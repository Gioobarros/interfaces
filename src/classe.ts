export interface Veiculo {
    acelerar(): string;
}

export class Carro {
    modelo: string;
    velocidadeAtual: number;

    constructor(modelo: string, velocidadeAtual: number) {
        this.modelo = modelo;
        this.velocidadeAtual = velocidadeAtual;
    }

    acelerar(): string {
        this.velocidadeAtual += 10;
        return `${this.modelo} está agora a ${this.velocidadeAtual} km/h.`;
    }
}

export class Moto {
    marca: string;
    cilindrada: number;

    constructor(marca: string, cilindrada: number) {
        this.marca = marca;
        this.cilindrada = cilindrada;
    }

    acelerar(): string {
        return `${this.marca} com ${this.cilindrada}cc está acelerando!`;
    }
}
