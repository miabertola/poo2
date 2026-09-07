const array = [3, 6, 9, 3, 1, 5, 2, 10];
function howManyTimesAppears(arreglo, num){
    return arreglo.filter(elemento=>elemento === num).length;
}

console.log(howManyTimesAppears(array, 3));
console.log(howManyTimesAppears(array, 5));
console.log(howManyTimesAppears(array, 7)); 