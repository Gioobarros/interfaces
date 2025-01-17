export abstract class Forma {
    abstract calcularArea(): number;

    static compararAreas(forma1: Forma, forma2: Forma): string {
        const area1 = forma1.calcularArea();
        const area2 = forma2.calcularArea();

        if (area1 > area2) {
            return 'A primeira forma é maior.';
        } else if (area1 < area2) {
            return 'A segunda forma é maior ou ambas são iguais.';
        } else {
            return 'Ambas as formas possuem áreas iguais.';
        }
    }
}

export class Retangulo extends Forma {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }
}

export class Circulo extends Forma {
    raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio ** 2;
    }
}
