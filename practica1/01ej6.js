const array1 = [4, 8, 2, 13, 20]
const array2 = [4, 8, 2, -5, 20]

function sumarMin(arreglo){
    const min=arreglo.reduce((menor,actual) => actual < menor ? actual : menor);
    return arreglo.map(elemento => elemento+min);
}

console.log(sumarMin(array1));
console.log(sumarMin(array2));