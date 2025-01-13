import { squareElements, squareElementsForEach, joinStrings, sortArray, firstTwoElements, filterEvenNumbers } from "./funcoes";

test("Calcula o quadrado dos elementos com for", () => {
    expect(squareElements([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
});

test("Calcula o quadrado dos elementos com forEach", () => {
    expect(squareElementsForEach([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
});

test("Concatena strings com espaço", () => {
    expect(joinStrings(["Arrays", "com", "TypeScript"])).toBe("Arrays com TypeScript");
});

test("Ordena array de strings", () => {
    expect(sortArray(["carro", "boneco", "ave", "lápis"])).toEqual(["ave", "boneco", "carro", "lápis"]);
});

test("Pega os dois primeiros elementos", () => {
    expect(firstTwoElements([2, 4, 6, 2, 8, 9, 5])).toEqual([2, 4]);
});

test("Filtra números pares", () => {
    expect(filterEvenNumbers([8, 3, 9, 5, 6, 12])).toEqual([8, 6, 12]);
});