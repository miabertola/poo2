const array1 = [4, 8, 2, 13, 20];
const array2 = [4, 8, 2, -5, 20];

// a. Suma de elementos
const suma1=array1.reduce((acumulado,actual) => acumulado + actual, 0);
const suma2=array2.reduce((acumulado,actual) => acumulado + actual, 0);

function cuadrado(n){
    return n*n;
}

function potencia(n){
    return n**n;
}

// b. Suma de los cuadrados
const sumaCuad1=array1.reduce((acumulado,actual)=>acumulado+cuadrado(actual),0);
const sumaCuad2=array2.reduce((acumulado,actual)=>acumulado+cuadrado(actual),0);

const sumaPot1=array1.reduce((acumulado,actual)=>acumulado+potencia(actual),0);
const sumaPot2=array2.reduce((acumulado,actual)=>acumulado+potencia(actual),0);

console.log(suma1,suma2);
console.log(sumaCuad1,sumaCuad2);
console.log(sumaPot1,sumaPot2);