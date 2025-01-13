export const squareElements = (array: number[]): number[] => { //calcula o ² dos elementos 
    let result: number[] = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] ** 2);
    }
    return result;
};

export const squareElementsForEach = (array: number[]): number[] => { // calculates the square of elements using forEach
    let result: number[] = []; //result pode ser modificado 
    array.forEach((item) => result.push(item ** 2));
    return result;
};

export const joinStrings = (array: string[]): string => { //concatena as strings
    return array.join(" ");
};

export const sortArray = (array: string[]): string[] => { //ordem alfabética
    return array.sort();
};

export const firstTwoElements = (array: number[]): number[] => { // retorna os 2 primeiros 
    return array.slice(0, 2);
};

export const filterEvenNumbers = (array: number[]): number[] => { // filtra os pares
    return array.filter((num) => num % 2 === 0);
};